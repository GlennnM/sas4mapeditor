var viewer;
var SCALED=false;
class Viewer{
	static WIDTH = 1280;
	static HEIGHT = 720;
	constructor(canvas){
		this.initCanvas(canvas);
		this.camera = {
			x:mapData.avatarSpawns[0].x,
			y:mapData.avatarSpawns[0].y,
			zoom:0.5,
			speed:16
		}
		this.keys = [];
		this.settings = {
			UP_KEY:87,
			DOWN_KEY:83,
			LEFT_KEY:65,
			RIGHT_KEY:68
		}
		const toGraphs=graphId=>{
			return mapData.graphs
			.find(graph=>graph.id===graphId)
			.nodes.map(id=>mapData.nodes.find(node=>id===node.id))
			.map(x=>{//add graphId but don't make it appear in json
				Object.defineProperty(x, "graphId", {
				    enumerable: false,
				    writable: true
				});
				Object.assign(x,{graphId:graphId});
				return x;
			});
		};
		const toEdges=physicsEdgeGraph=>{
			let edges=this.edges.filter(edge=>physicsEdgeGraph.includes(edge.start) || physicsEdgeGraph.includes(edge.end));
			edges.forEach(edge=>edge.graph=edge.start.graphId);
			return edges;
		};
		this.physicsEdgeGraphs = mapData.physicsEdgeGraphs.map(toGraphs);
		this.aiEdgeGraphs =  mapData.aiPathingGraphs.map(toGraphs);
		this.otherGraphs = mapData.graphs
			.map(x=>x.id)
			.filter(x=>!mapData.aiPathingGraphs.includes(x))
			.filter(x=>!mapData.physicsEdgeGraphs.includes(x))
			.map(toGraphs);
		this.edges = mapData.edges.map(edge=>{
			const start = mapData.nodes.find(node=>node.id === edge.a);
			const end = mapData.nodes.find(node=>node.id === edge.b);
			return {
				start,
				end
			}
		});
		if(!SCALED){
			mapData.extras.forEach(extra=>{
					extra.x*=10;
					extra.y*=10;
			});
		}
		SCALED=true;
		this.extras = mapData.extras;
		this.physicsEdges = this.physicsEdgeGraphs.map(toEdges);
		this.aiEdges = this.aiEdgeGraphs.map(toEdges);
		this.otherEdges = this.otherGraphs.map(toEdges);
		this.interval = setInterval(()=>{
			this.update();
			this.render();
		},1000/30);
		this.tab="ENTITY";//ENTITY, NODE, EDGE, TILE, OTHER
		this.selected={};
		this.recentGraphs=[];
		this.recentTiles=[];
		let input=document.getElementById("select_entity_input");
		input.innerHTML='';
		for(var id of Object.keys(scripts)){
			let s=scripts[id];
			let t=document.createElement("option");
			t.dataset.id=id;
			t.innerText=id+" - "+s.name;
			t.onclick=()=>{
				
			}
			input.appendChild(t);
		}
	}
	
	destroy(){
		window.removeEventListener('keydown',this.kd);
		window.removeEventListener('keyup',this.ku);
		this.canvas.removeEventListener('wheel',this.w);
		window.removeEventListener('mouseup',this.mu);
		this.canvas.removeEventListener('mousedown',this.md);
		this.canvas.removeEventListener('mousemove',this.mm);
		this.canvas.removeEventListener('contextmenu',this.c);
		clearInterval(this.interval);
	}
	initCanvas(canvas){
		this.kd=this.keydown.bind(this);
		this.ku=this.keyup.bind(this);
		this.w=this.onwheel.bind(this);
		this.mu=this.mouseup.bind(this);
		this.md=this.mousedown.bind(this);
		this.mm=this.mousemove.bind(this);
		this.c= (e) => { e.preventDefault(); e.stopPropagation(); };
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.canvas.width = Viewer.WIDTH;
		this.canvas.height = Viewer.HEIGHT;
		window.addEventListener('keydown',this.kd);
		window.addEventListener('keyup',this.ku);
		canvas.addEventListener('wheel',this.w);
		window.addEventListener('mouseup',this.mu);
		canvas.addEventListener('mousedown',this.md);
		canvas.addEventListener('mousemove',this.mm);
		canvas.addEventListener('contextmenu',this.c);
	}
	update(){
		this.handleInput();
	}
	/*Creates a shifted x and y of things to be drawn based on camera pos. Returns nothing if x and y are off map.*/
	cameraOffset(obj) {
		let adjustedX = (obj.x - (this.camera.x)) * this.camera.zoom + canvas.width / 2;
		let adjustedY = (obj.y - (this.camera.y)) * this.camera.zoom + canvas.height / 2;
		let oWidth = obj.width === undefined ? 0 : obj.width * this.camera.zoom;
		let oHeight = obj.height === undefined ? 0 : obj.height * this.camera.zoom;
		let baseX=0;
		let baseY=0;
		if(obj.image){
			 let bound=bounds[assets[obj.image]]
			 if(bound){
				 baseX=bound[0]* this.camera.zoom;
				 baseY=bound[1]* this.camera.zoom;
			 }
		}
		if ((adjustedX + oWidth < baseX && adjustedX> baseX+canvas.width) || (adjustedY + oHeight< baseY && adjustedY > baseY+canvas.height))
			return;
		return {
			x: adjustedX,
			y: adjustedY
		};
	}
	//inverse of cameraOffset
	mapOffset(obj){
		return {
			x:(obj.x-this.canvas.width/2)/this.camera.zoom+(this.camera.x),
			y:(obj.y-this.canvas.height/2)/this.camera.zoom+(this.camera.y)
		};
	}
	handleInput() {
		if (this.keys[this.settings.UP_KEY]) {
			this.camera.y -= this.camera.speed/this.camera.zoom;
		}
		if (this.keys[this.settings.DOWN_KEY]) {
			this.camera.y += this.camera.speed/this.camera.zoom;
		}
		if (this.keys[this.settings.LEFT_KEY]) {
			this.camera.x -= this.camera.speed/this.camera.zoom;
		}
		if (this.keys[this.settings.RIGHT_KEY]) {
			this.camera.x += this.camera.speed/this.camera.zoom;
		}
		if (this.keys[this.settings.INTERACT_KEY]) {
			this.doInteract();
		}
	
	}
	canvasPos(e){
		const rect = canvas.getBoundingClientRect();
		return {
			x:e.clientX - rect.left,
			y:e.clientY - rect.top
		};
	}
	mousedown(e){
		
		this.timeDown=Date.now()
		if(e.button){
			this.sel=this.canvasPos(e);
		}else this.keys[0]=1;
	}
	static btwn(i, bound1,bound2, r){
		return bound1>bound2? (i < bound1-r && i > bound2+r):(i > bound1-r && i < bound2+r);
	}
	/**
     * @param {string} newTab
     */
	set tab(newTab){
		this.tab_=newTab;
		document.getElementById("tabDisplay").innerText=newTab;
		this.refreshSelection();
	}
	get tab(){
		return this.tab_;
	}
	nodeNearby(pos,node){
		if(!node)return;
		const adj=this.cameraOffset(node);
		if(!adj)return;
		return Viewer.btwn(adj.x,this.sel.x,pos.x,30) && Viewer.btwn(adj.y,this.sel.y,pos.y,30);
	}
	edgeNearby(pos,edge){
		if(!edge)return;
		return [edge.start, edge.end].map(this.cameraOffset.bind(this))
			.filter(x=>x)
			.some(adj=>Viewer.btwn(adj.x,this.sel.x,pos.x,30) 
				&& Viewer.btwn(adj.y,this.sel.y,pos.y,30));
	}
	//editing something(replace with state TODO)
	editing(){
		return !([...document.querySelectorAll(".popup")].filter(x=>!x.hidden).length);
	}
	mouseup(e){
		let drag=(Date.now()-(this.timeDown || Infinity)>250) || 
		(Date.now()-(this.lastMove || Infinity)<20);
		if(!this.editing())return;
		if(e.button){
			
			const pos=this.mouse || this.canvasPos(e);
			if(!this.sel || !pos)return;
			let near=this.nodeNearby.bind(this,pos);
			let near2=this.edgeNearby.bind(this,pos);
			this.selected={
				entities : mapData.entities.filter(near),
				nodes : mapData.nodes.filter(near),
				other : mapData.extras.filter(near),
				tiles : mapData.tiles.filter(near),
				avatarSpawns : mapData.avatarSpawns.filter(near),
				enemySpawns : mapData.enemySpawns.filter(near),
				aiEdges : this.aiEdges.flatMap(x=>x).filter(near2),
				physicsEdges : this.physicsEdges.flatMap(x=>x).filter(near2)
			}
			this.sel=null;
			
			//display the selected stuff TODO
			this.refreshSelection();
		}
		else {
			this.keys[0]=0;
			if(this.mouse && this.place && !e.movementX && !e.movementY
			&& document.activeElement===this.canvas
			&&!drag
			){
				let adj=this.mapOffset(this.mouse);
				
				switch(this.place.tab){
					case "TILE":
						let tile={
							"id": this.newTileId(),
							"image": this.place.tile,
							"z": 0,
							"isInBottomLayer": false,
							"isCollapsed": false,
							"x": adj.x,
							"y": adj.y,
							"rotation": 0,
							"scaleX": 1,
							"scaleY": 1,
							"b1": false,
							"b2": false,
							"s1": 0,
							"s2": 0
						};
						mapData.tiles.push(tile);
						this.place=null;
						this.addRecentTile(tile.id);
						this.recreate();
						break;
					case "ENTITY":
						let ent=this.place.entity;
						ent.x=Math.round(adj.x);
						ent.y=Math.round(adj.y);
						mapData.entities.push(ent);
						this.place=null;
						this.recreate();
						break;
					default:
						
						let graph=mapData.graphs
							.find(x=>x.id==this.place.graphId);
						let start=mapData.nodes
							.filter(x=>x.graphId && x.graphId==graph.id)
							.find(x=>near(this.cameraOffset(x),this.mouse));
						if(start){
							if(!this.place.edgeStart){
								this.place.edgeStart=start;
								return;
							}else if(this.place.edgeStart==start){
								this.place=null;
								this.recreate();
								return;
							}else{
								mapData.edges.push({
									a:this.place.edgeStart.id,
									b:start.id,
									weight:1
								});
								this.place=null;
								this.recreate();
								return;
							}
						}
						let node={
							id:this.newNodeId(),
							x:Math.round(adj.x),
							y:Math.round(adj.y),
							name:''
						};
						mapData.nodes.push(node);
						graph.nodes.push(node.id);
						graph.nodeCount++;
						if(this.place.edgeStart){
							let edge={
								a:this.place.edgeStart.id,
								b:node.id,
								weight:1
							};
							mapData.edges.push(edge);
						}
						this.place.edgeStart=node;
						this.recreate();
						break;
				}
			}
		}
	}
	getTarget(){
		let target;
		switch(this.tab){
			case "ENTITY":target=this.selected.entities;break;
			case "NODE":target=this.selected.nodes;break;
			case "COLLISION":target=this.selected.physicsEdges;break;
			case "AI":target=this.selected.aiEdges;break;
			//case "ENTITY":target=this.selected.aiEdgeGraph;
			case "TILE":target=this.selected.tiles;break;
			case "OTHER":target=this.selected.other;break;
			case "AVATAR":target=this.selected.avatarSpawns;break;
			case "ENEMY":target=this.selected.enemySpawns;break;
			default:alert(this.tab);
		}
		return target;
	}
	refreshSelection(force=false){
		if(!this.selected)return;
		let target=this.getTarget();
		Object.keys(this.selected)
			.filter(x=>x!="dispEntities")
			.forEach(x=>document.getElementById(x+"Count").innerHTML=this.selected[x].length);
		if(target && (this.selected.dispEntities!=target || force)){
			this.selected.dispEntities=target;
			let ent=document.getElementById("entities");
			ent.innerHTML="";
			target.map(this.wrapEntity.bind(this))
				.forEach(x=>ent.appendChild(x));
			if(target.length>0)
				ent.children[0].setAttribute('open','');
		}
	}
	mousemove(e){
		this.lastMove=Date.now()
		if(this.keys[0]){
			this.camera.x-=e.movementX/this.camera.zoom;
			this.camera.y-=e.movementY/this.camera.zoom;
		}
		this.mouse=this.canvasPos(e);
	}
	onwheel(e){
		if(e.deltaY<0){
			this.camera.zoom*=1.1;
		}else 
			this.camera.zoom*=0.9;
		let sign=(e.deltaY<0)?1:-1;
		this.camera.x+=sign*(this.mouse.x-this.canvas.width/2)/(8*this.camera.zoom);
		this.camera.y+=sign*(this.mouse.y-this.canvas.height/2)/(8*this.camera.zoom);
		e.preventDefault();
	}
	keydown(e) {
		this.keys[e.keyCode] = true;
	}
	keyup(e) {
		if ((this.keys[8] || this.keys[46]) && this.editing()) {
			this.clearAllTabs();
		}
		this.keys[e.keyCode] = false;
		
	}
	clearAllTabs(){
		let tmp=this.tab;
		for(var x of ["ENTITY","NODE","COLLISION","AI","TILE","OTHER","AVATAR","ENEMY"]){
			viewer.tab=x;
			viewer.clearAll();
		}	
		viewer.tab=tmp;	
	}
	clearAll(){
		let t=this.getTarget();
		if(t)this.deleteThing(...t);
	}
	editTextSave(){
		Object.assign(
			viewer.getTarget()[viewer.editingIndex],
			JSON.parse(document.getElementById("editTextArea").value)
		);
		
		viewer.editTextDiscard();
		viewer.recreate();
	}
	
	editTextDiscard(){
		viewer.editingThing=null;
		viewer.editingIndex=-1;
		viewer.hidePopups();
	}
	editThing(e){
		//todo - clearly didnt link back to mapdata
		this.editingThing=e;
		this.editingIndex=this.getTarget().findIndex(x=>(x.id && x.id==e.id)||x==e);//text sadf
		
		let json=this.getTarget()[this.editingIndex];
		document.getElementById("overlay").hidden=null;
		document.getElementById("popup").hidden=null;
		document.getElementById("editTextArea").value=JSON.stringify(json,null,2);
		
	}
	editParams(e){
		document.getElementById("overlay").hidden=null;
		let menu=document.getElementById("edit_params");
		menu.hidden=null;
		let paramNameContainer=menu.querySelector("#parameterEditHint").children[0];
		let div=menu.querySelector("#parameterEditDiv");
		paramNameContainer.innerText=scripts[e.script].name;
		div.innerHTML='';
		div.dataset.id=e.id;
		div.appendChild(paramsHTML(e.script,extract(e.script,e.parameters)));
	}
	editParamsSave(){
		let edit=document.getElementById("parameterEditDiv");
		let params=theParams(edit.children[0]);
		mapData.entities.find(x=>x.id==edit.dataset.id).parameters=params;
		this.hidePopups();
		this.recreate();
	}
	deleteThing(...e){
		
		try{
		let target;
		switch(this.tab){
			case "ENTITY":target="entities";break;
			case "AVATAR":target="avatarSpawns";break;
			case "ENEMY":target="enemySpawns";break;
			case "NODE":
			target="nodes";
			//the edges dont have id
			for(var x of e){
				x=x.id||x;
				mapData.nodes=mapData.nodes.filter(a=>a.id!=x);
				mapData.edges=mapData.edges.filter(a=>a.a!=x && a.b!=x);
				for(var g of mapData.graphs){
					g.nodes=g.nodes.filter(a=>a!=x);
					g.nodeCount=g.nodes.length;
					if(g.nodes.length==0){
						this.recentGraphs=this.recentGraphs.filter(x=>x!=g.id);
						mapData.graphs=mapData.graphs.filter(x=>x.id!=g.id);
						mapData.physicsEdgeGraphs=mapData.physicsEdgeGraphs.filter(x=>x!=g.id);
						mapData.aiPathingGraphs=mapData.aiPathingGraphs.filter(x=>x!=g.id);
					}
				}
			}
			break;
			case "COLLISION":
			case "AI":
			for(var x of e){
				x=x.id||x;
				mapData.edges=mapData.edges.filter(a=>a.a!=x.start.id || a.b!=x.end.id);
				this.selected.aiEdges=this.selected.aiEdges.filter(a=>a!=x);
				this.selected.physicsEdges=this.selected.physicsEdges.filter(a=>a!=x);
				
			}
			target="edges";
			break;
			
			case "TILE":
				if(this.recentTiles)
					for(var x of e){
						this.recentTiles=this.recentTiles.filter(a=>a.id!=x.id);
					}
				target="tiles";
				break;
			case "OTHER":
				for(var x of e){
					mapData.extras=mapData.extras.filter(a=>a.x!=x.x || a.y!=x.y || a.text!=x.text);
					this.selected.other=this.selected.other.filter(a=>a!=x);
				}
				target="edges";break;
		}
		if(target!="edges")
			for(var x of e){
				x=x.id||x;
				mapData[target]=mapData[target].filter(a=>a.id!=x);
				this.selected[target]=this.selected[target].filter(a=>a.id!=x);
			}
		}catch(e){console.dir(e)};
		this.recreate();
	}
	recreate(){
		
		this.destroy();
		viewer = new Viewer(document.getElementById("canvas"));
		viewer.camera=this.camera;
		viewer.selected=this.selected;
		viewer.place=this.place;
		viewer.tab=this.tab;
		viewer.recentGraphs=this.recentGraphs;
		viewer.recentTiles=this.recentTiles;
		viewer.refreshSelection(true);
	}
	render(){
		const canvas = this.canvas;
		const ctx = this.ctx;
		ctx.clearRect(0,0, canvas.width, canvas.height);
		ctx.fillStyle = '#EEEEEE';
		ctx.fillRect(0,0, canvas.width, canvas.height);
		
		
		ctx.fillStyle='black';
		var off00=0;
		mapData.tiles.sort(x=>-x.z).forEach(node=>{
			var off=(node.x==0&&node.y==0);
			if(off){
				off00-=10;
			}
			if(document.getElementById("showTile").checked){
				const adjusted = this.cameraOffset(node);
				if(adjusted){
					if(document.getElementById("showLabel").checked)
						ctx.fillText("tile "+node.id+"["+assets[node.image]+"]", adjusted.x, adjusted.y+(off?off00:0));
					let i=assetImg(node.image);
					//hide fields
					Object.defineProperty(node, "width", {
				    	enumerable: false,
				    	writable: true
					});
					Object.defineProperty(node, "height", {
				    	enumerable: false,
				    	writable: true
					});
					node.width=i.width;
					node.height=i.height;
					ctx.save();
					ctx.translate(adjusted.x,adjusted.y);
					ctx.rotate(node.rotation*Math.PI/180);
					//Sprites can have pivot points other than top left, these are described by bounds in swf but don't get saved on export
					let bound=bounds[assets[node.image]];
					ctx.scale(this.camera.zoom,this.camera.zoom);
					ctx.scale(node.scaleX,node.scaleY);
					if(bound)
						ctx.translate(bound[0],bound[1]);
						
					if(i.width)
						ctx.drawImage(i,0,0);
					ctx.restore();
				}
			}
		});
		
		ctx.fillStyle='green';
		off00=0;
		if(document.getElementById("showEntity").checked){
			mapData.entities.forEach(node=>{
				const adjusted = this.cameraOffset(node);
				var off=(node.x==0&&node.y==0);
				if(off){
					off00+=10;
				}
				if(adjusted){
					ctx.fillRect(adjusted.x, adjusted.y, 20,20);
					if(document.getElementById("showLabel").checked){
						ctx.fillText(node.id, adjusted.x, adjusted.y);
						ctx.fillText(scripts[node.script]?scripts[node.script].name:"", adjusted.x, adjusted.y+5+(off?off00:0));
					}
				}
			});
			ctx.fillStyle='blue';
			mapData.avatarSpawns.forEach(node=>{
				const adjusted = this.cameraOffset(node);
				if(adjusted)
					ctx.fillRect(adjusted.x, adjusted.y, 5,5);
			});
			ctx.fillStyle='red';
			mapData.enemySpawns.forEach(node=>{
				const adjusted = this.cameraOffset(node);
				if(adjusted)
					ctx.fillRect(adjusted.x, adjusted.y, 20,20);
			});
			ctx.fillStyle='purple';
			this.extras.forEach(node=>{
				const adjusted = this.cameraOffset(node);
				if(adjusted)
					ctx.fillRect(adjusted.x, adjusted.y, 20,20);
			});
		}
		
		ctx.fillStyle='black';
		if(document.getElementById("showCollision").checked)
			this.physicsEdges.forEach((physicsEdges)=>{
				physicsEdges.forEach((edge)=>{
					const adjustedStart = this.cameraOffset(edge.start);
					const adjustedEnd = this.cameraOffset(edge.end);
					if(adjustedStart && adjustedEnd){
						this.line(adjustedStart, adjustedEnd);
					}
				});
			});
		ctx.fillStyle='red';
		ctx.strokeStyle='red';
		ctx.lineWidth = 1;
		if(document.getElementById("showAI").checked)
			this.aiEdges.flatMap(x=>x).forEach((edge)=>{
				const adjustedStart = this.cameraOffset(edge.start);
				const adjustedEnd = this.cameraOffset(edge.end);
				if(adjustedStart && adjustedEnd){
					this.line(adjustedStart,adjustedEnd);
				}
			});
		
		if(document.getElementById("showAI").checked)
			this.otherEdges.flatMap(x=>x).forEach((edge)=>{
				ctx.strokeStyle=randomColor(edge.start.graphId);
				if(this.place&&edge.start.graphId!=this.place.graphId)
					return;
				ctx.lineWidth = 2+this.place*2;
				
				const adjustedStart = this.cameraOffset(edge.start);
				const adjustedEnd = this.cameraOffset(edge.end);
				if(adjustedStart && adjustedEnd){
					this.line(adjustedStart, adjustedEnd);
				}
			});
			ctx.fillStyle='black';
		ctx.strokeStyle='black';
		
		mapData.nodes.forEach(node=>{
			let off=this.cameraOffset(node);
			if(this.place && this.place.graphId==node.graphId){
				var prev= ctx.font;
				ctx.font= '20px Arial';
				ctx.fillStyle=randomColor(node.graphId);
				ctx.beginPath();
				ctx.ellipse(off.x,off.y,10,10,0,0,2*Math.PI);
				ctx.fill();
				ctx.textAlign='center';
				ctx.fillStyle='black';
				ctx.fillText(node.id,off.x,off.y);
				ctx.textAlign='left';
				ctx.font=prev;
				//alert(node.id);
				//ctx.rect(off.x,off.y,40,40);
			}else if(document.getElementById("showLabel").checked){
				ctx.fillText(node.id,off.x,off.y);
			}
		});
		if(this.sel && this.mouse){
			const pos=this.mouse;
			ctx.fillStyle = '#40408020';
			ctx.fillRect(this.sel.x,this.sel.y,pos.x-this.sel.x,pos.y-this.sel.y, canvas.height);
		}else if(this.place&& this.mouse){
			
			switch(this.place.tab){
				case "TILE":
					let i=this.place.image;
					ctx.save();
					ctx.translate(this.mouse.x,this.mouse.y);
					//Sprites can have pivot points other than top left, these are described by bounds in swf but don't get saved on export
					let bound=bounds[assets[this.place.tile]];
					ctx.scale(this.camera.zoom,this.camera.zoom);
					if(bound)
						ctx.translate(bound[0],bound[1]);
						
					if(i.width)
						ctx.drawImage(i,0,0);
					ctx.restore();
					break;
				case "ENTITY":
					ctx.fillStyle="green";
					ctx.fillRect(this.mouse.x,this.mouse.y,20,20);
					break;
				default:
					ctx.fillStyle=randomColor(this.place.graphId);
					ctx.beginPath();
					ctx.ellipse(this.mouse.x,this.mouse.y,10,10,0,0,2*Math.PI);
					ctx.fill();
					if(this.place.edgeStart){
						let adj=this.cameraOffset(this.place.edgeStart);
						this.line(adj,this.mouse);
					}
					break;
			}
		}
	}
	line(p1,p2){
		this.ctx.beginPath();
		this.ctx.moveTo(p1.x,p1.y);
		this.ctx.lineTo(p2.x,p2.y);
		this.ctx.stroke();
	}
	fixLengths(){
		mapData.tileCount=mapData.tiles.length;
		mapData.nodeCount=mapData.nodes.length;
		mapData.edgeCount=mapData.edges.length;
		mapData.graphCount=mapData.graphs.length;
		mapData.physicsCount=mapData.physicsEdgeGraphs.length;
		mapData.aiCount=mapData.aiPathingGraphs.length;
		mapData.avatarSpawnCount=mapData.avatarSpawns.length;
		mapData.aiCount=mapData.aiPathingGraphs.length;
		mapData.enemySpawnCount=mapData.enemySpawns.length;
		mapData.extraCount=mapData.extras.length;
		mapData.entityCount=mapData.entities.length;
		mapData.extraCount=mapData.extras.length;
		mapData.thingCount=mapData.things.length;
		for(var x of mapData.entities){
			x.parameterLength=x.parameters.length;
		}
	}
	addEntity(){
		document.getElementById("select_entity_input").value="";
		document.getElementById("overlay").hidden=null;
		let menu=document.getElementById("select_entity");
		menu.hidden=null;
		
		
		let input=menu.querySelector("input");
		let ctr=menu.querySelector("#select_entity_ctr");
		if(ctr.children.length<Object.keys(scripts).length){
			ctr.innerText="loading..."
			setTimeout(()=>{
				ctr.innerText='';
				for(let [id,script] of Object.entries(scripts)){
					let div=this.box(id,id+" - "+script.name,input,false);
					ctr.appendChild(div);
				}
			},1);
		}
		
		menu.querySelector("#parameterHint").children[0].innerText="N/A";
		let div=menu.querySelector("#parameterDiv");
		div.innerHTML='';
	}
	addEntityUpdate(){
		let input=document.getElementById("select_entity_input");
		let id=input.value
			.split(" ")
			.map(Number)
			.filter(x=>!isNaN(x))[0];
		let menu=document.getElementById("select_entity");
		let paramNameContainer=menu.querySelector("#parameterHint").children[0];
		let div=menu.querySelector("#parameterDiv");
		this.doSearch("select_entity_input","select_entity_ctr");
		if(id===undefined || !scripts[id]){
			paramNameContainer.innerText="N/A";
			div.innerHTML='';
			return;
		}
		paramNameContainer.innerText=scripts[id].name;
		div.innerHTML='';
		div.appendChild(paramsHTML(id));
		this.doSearch("select_entity_input","select_entity_ctr");
	}
	addEntitySave(){
		let id=document.getElementById("select_entity_input").value
			.split(" ")
			.map(Number)
			.filter(x=>!isNaN(x))[0];
		if(id===undefined || !scripts[id])return;
		let params=theParams(document.getElementById("parameterDiv").children[0]);
		
		this.place={
			tab:"ENTITY",
			entity:{
				id:this.newEntityId(),
				script:id,
				parameterLength:params.length,
				parameters:params
			}
		}
		this.hidePopups();
	}
	box(id, name, target, image=false){
		let div=document.createElement("div");
		if(image){
			let i=assetImg(id).cloneNode(true);
			i.hidden=null;
			i.style='margin-left:auto;margin-right:auto;max-width:50%;max-height:60%';
			div.appendChild(i);	
		}
		div.innerHTML+="<br>"+name;
		div.classList=["tile_images"];
		div.onclick=()=>{
			target.value=name;
			if(image)
				viewer.addTileSave()
			else this.addEntityUpdate();				
		};
		return div;
	}
	addTile(){
		document.getElementById("overlay").hidden=null;
		document.getElementById("select_tile").hidden=null;
		let input=document.getElementById("select_tile_input");
		let ctr=document.getElementById("select_tile_ctr");
		if(ctr.children.length<Object.keys(assets).length){
			ctr.innerText="loading..."
			setTimeout(()=>{
				ctr.innerText='';
				for(let [id,tile] of Object.entries(assets)){
					let div=this.box(id,tile,input,true);
					ctr.appendChild(div);
				}
			},1);
		}
	}
	
	addTileUpdate(){
		this.doSearch("select_tile_input","select_tile_ctr");
	}
	doSearch(input,output){
		let text=document.getElementById(input).value;
		for(let e of document.getElementById(output).children){
			if(!e.innerText.toLowerCase().includes(text.toLowerCase())){
				e.style.display='none';
			}else 
				e.style.display='inline-block';
		}
	}
	addTileSave(){
		let input=document.getElementById("select_tile_input");
		let text=input.value;
		let id=Object.entries(assets).find(x=>x[1]==text)[0];
		if(!id)return;
		this.place={
			tab:"TILE",
			tile:id,
			image:assetImg(id).cloneNode(true)
		};
		this.addTileDiscard();
	}
	addTileDiscard(){
		document.getElementById("overlay").hidden=1;
		document.getElementById("select_tile").hidden=1;
	}
	addPhysics(){
		
		document.getElementById("overlay").hidden=null;
		document.getElementById("add_collision").hidden=null;
		//document.getElementById("editTextArea").value=JSON.stringify(json,null,2);
	}
	addPhysicsSave(){
		let mask=
			!document.getElementById("collide_projectiles").checked * 16
			| !document.getElementById("collide_enemies").checked * 8
			| !document.getElementById("collide_players").checked * 4
			| !document.getElementById("collide_survivors").checked * 2
			| !document.getElementById("collide_ai").checked * 1;
		switch(mask){
			case 0:
				//collision graph
				let id=mapData.physicsEdgeGraphs[0];
				if(!id){
					id=this.newGraphId();
					mapData.graphs.push({id:id,nodes:[],nodeCount:0});
					mapData.physicsEdgeGraphs.push(id);
					this.addRecentGraph(id);
					recreate();
				}
				this.place={
					graphId:id
				}
				break;
			case 31:
				break;
			default:
				this.place={
					graphId:this.findStaticWalls(mask)
				}
				//1. find S
				//2. create ifne
				//3. set placement-->add that first(nodes are circles, hide others, circle on mouse)
		}
		this.hidePopups();
	}
	addRecentGraph(id){
		this.recentGraphs.push(id);
		if(this.recentGraphs.length>4)
			this.recentGraphs=this.recentGraphs.slice(1);
	}
	addRecentTile(id){
		this.recentTiles.push(id);
		if(this.recentTiles.length>4)
			this.recentTiles=this.recentTiles.slice(1);
	}
	hidePopups(){
		document.getElementById("overlay").hidden=1;
		[...document.getElementsByClassName("popup")].forEach(x=>x.hidden=1);
	}
	addAI(other=false){
		let sg=document.getElementById("select_graph");
		document.getElementById("overlay").hidden=null;
		sg.hidden=null;
		this.other=other;
		let form=document.getElementById("select_graph_form");
		//todo: sketch them and maybe show potential entity uses
		form.innerHTML="Pick graph...<br>";
		(other?mapData.graphs.map(x=>x.id):mapData.aiPathingGraphs)
			.concat(-1)
			.forEach(graph=>{
				var newInput = document.createElement("input");
				newInput.id="pick_graph_"+graph;
				newInput.type="radio";
				newInput.name="select_graph_radio";
				newInput.dataset.graphid=graph;
				var label=document.createElement("label");
				//if(other)label.style.color=randomColor(graph);
				label.htmlFor=newInput.id;
				
				label.innerHTML=graph<0?"new...<br>":
					describeGraph(graph)+"<br>";
				form.appendChild(newInput);
				form.appendChild(label);
			});
	}
	addAISave(){
		let res=document.getElementById("select_graph_form")
			.querySelector('input:checked');
		if(!res)return;
		let id=res.dataset.graphid;
		if(id==-1){
			id=this.newGraphId();
			mapData.graphs.push({id:id,nodes:[],nodeCount:0});
			this.addRecentGraph(id);
			if(!this.other)mapData.aiPathingGraphs.push(id);
			this.place={
				graphId:id
			//tab:
			};
			this.recreate();
		}
		this.place={
			graphId:id
			//tab:
		};
		this.hidePopups();
	}
	findStaticWalls(mask){
		let id;
		//todo: parameter processing
		let wall=mapData.entities
			.find(x=>x.script==64 &&
				mask==(x.parameters[2] * 16
					| x.parameters[3] * 8
					| x.parameters[4] * 4
					| x.parameters[5] * 2
					| x.parameters[6] * 1)
			)
		
		if(wall==null){
			id=this.newGraphId();
			wall={
				id:this.newEntityId(),
				script:64,
				parameterSize:7,
				parameters:[
					(id>>>8)&0xff,id&0xff,
					mask&16,mask&8,mask&4,mask&2,mask&1
				],
				x:0,
				y:0
			};
			mapData.graphs.push({id:id,nodeCount:0,nodes:[]});
			this.addRecentGraph(id);
			mapData.entities.push(wall);
		}
		id=((wall.parameters[0]&0xff)<<8)|(wall.parameters[1]&0xff);
		return id;
	}
	newGraphId(){
		return Math.max(...mapData.graphs.map(x=>x.id))+1;
	}
	newEntityId(){
		return Math.max(...mapData.entities.map(x=>x.id))+1;
	}
	newNodeId(){
		return Math.max(...mapData.nodes.map(x=>x.id))+1;
	}
	newTileId(){
		return Math.max(...mapData.tiles.map(x=>x.id))+1;
	}
	wrapEntity(e){
		let e_=e;
		let del=document.createElement("a");
		del.href='#';
		del.innerText="[DELETE]";
		del.onclick=()=>this.deleteThing(e_);
		
		let edit=document.createElement("a");
		edit.href='#';
		edit.innerText="[EDIT]";
		edit.onclick=()=>this.editThing(e_);
		
		
		let thing=document.createElement("details");
		thing.innerHTML=(()=>{
			if(!e.x && e.x!=0){
				
			
			return `<summary style='cursor:pointer'><u>${this.tab.toLowerCase()} - ${e.start.id}(${e.start.x}, ${e.start.y}) ->${e.end.id}(${e.end.x}, ${e.end.y}) - Graph #${e.graph}</u></summary>${JSON.stringify(e)}`;
			}
			var script=e.script||e.text;
			if(script || this.tab=="TILE"){
				//this is dumb
				script=script?(this.tab=="OTHER"?{name:script}:scripts[script]):{name:assets[e.image]};
				if(script)
					return `<summary style='cursor:pointer'><u>${this.tab.toLowerCase()} ${e.id}(${script.name})(${e.x}, ${e.y})</u></summary>
							<pre>${JSON.stringify(e,null,'\t')}</pre>${JSON.stringify(script)}`;
			}
			let graphDesc=e.graphId?" - Graph #"+e.graphId:"";
			return `<summary style='cursor:pointer'><u>${this.tab.toLowerCase()} ${e.id} - (${e.x}, ${e.y}) ${graphDesc}</u></summary>`;
			
			//return "<pre><code>"+JSON.stringify(this.selected.entities,null,'\t')+"</code></pre>";
		})();
		if(this.tab!="COLLISION" && this.tab!="AI"){
			thing.children[0].appendChild(edit);
		}
		if(this.tab=="ENTITY"){
			let para=document.createElement("a");
			para.href='#';
			para.innerText="[PARAMS]";
			para.onclick=()=>this.editParams(e_);
			thing.children[0].appendChild(para);
		}
		
		thing.children[0].appendChild(del);
		return thing;
	}
}