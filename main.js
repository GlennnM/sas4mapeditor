
let viewer;

class Viewer{
	static WIDTH = 1280
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
		this.physicsEdgeGraphs = mapData.physicsEdgeGraphs.map(graphId=>{
			return mapData.graphs.find(graph=>graph.id===graphId).nodes.map(id=>mapData.nodes.find(node=>id===node.id)).map(x=>{Object.assign(x,{graphId:graphId});return x;});
		});
		this.aiEdgeGraphs =  mapData.aiPathingGraphs.map(graphId=>{
			return mapData.graphs.find(graph=>graph.id===graphId).nodes.map(id=>mapData.nodes.find(node=>id===node.id)).map(x=>{Object.assign(x,{graphId:graphId});return x;});
		});
		this.edges = mapData.edges.map(edge=>{
			const start = mapData.nodes.find(node=>node.id === edge.a);
			const end = mapData.nodes.find(node=>node.id === edge.b);
			return {
				start,
				end
			}
		});
		mapData.extras.forEach(extra=>{
			extra.x*=10;
			extra.y*=10;
		});
		this.extras = mapData.extras;
		this.physicsEdges = this.physicsEdgeGraphs.map(physicsEdgeGraph=>{
			let edges=this.edges.filter(edge=>physicsEdgeGraph.includes(edge.start) || physicsEdgeGraph.includes(edge.end));
			edges.forEach(edge=>edge.graph=edge.start.graphId);
			return edges;
		});
		this.aiEdges = this.aiEdgeGraphs.map(aiEdgeGraph=>{
			let edges= this.edges.filter(edge=>aiEdgeGraph.includes(edge.start) || aiEdgeGraph.includes(edge.end))
			edges.forEach(edge=>edge.graph=edge.start.graphId);
			return edges;
		});
		this.interval = setInterval(()=>{
			this.update();
			this.render();
		},1000/20);
		this.tab="ENTITY";//ENTITY, NODE, EDGE, TILE, OTHER
		this.selected={};
	}
	destroy(){
		window.removeEventListener('keydown',this.kd);
		window.removeEventListener('keyup',this.ku);
		this.canvas.removeEventListener('wheel',this.w);
		window.removeEventListener('mouseup',this.mu);
		this.canvas.removeEventListener('mousedown',this.md);
		this.canvas.removeEventListener('mousemove',this.mm);
		clearInterval(this.interval);
	}
	initCanvas(canvas){
		this.kd=this.keydown.bind(this);
		this.ku=this.keyup.bind(this);
		this.w=this.onwheel.bind(this);
		this.mu=this.mouseup.bind(this);
		this.md=this.mousedown.bind(this);
		this.mm=this.mousemove.bind(this);
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
				 baseX=bound[0]* this.camera.zoom/2;
				 baseY=bound[1]* this.camera.zoom/2;
			 }
		}
		if ((adjustedX + oWidth < baseX && adjustedX> baseX+canvas.width) || (adjustedY + oHeight< baseY && adjustedY > baseY+canvas.height))
			return;
		return {
			x: adjustedX,
			y: adjustedY
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
		this.sel=this.canvasPos(e);
	}
	static btwn(i, bound1,bound2, r){
		return bound1>bound2? (i < bound1-r && i > bound2+r):(i > bound1-r && i < bound2+r);
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
	mouseup(e){
		const pos=this.mouse || this.canvasPos(e);
		if(!this.sel || !pos)return;
		let near=this.nodeNearby.bind(this,pos);
		let near2=this.edgeNearby.bind(this,pos);
		this.selected={
			entities : mapData.entities.filter(near),
			nodes : mapData.nodes.filter(near),
			other : mapData.extras.filter(near),
			tiles : mapData.tiles.filter(near),
			aiEdges : this.aiEdges.flatMap(x=>x).filter(near2),
			physicsEdges : this.physicsEdges.flatMap(x=>x).filter(near2)
		}
		this.sel=null;
	}
	mousemove(e){
		this.mouse=this.canvasPos(e);
	}
	onwheel(e){
		if(e.deltaY<0){
			this.camera.zoom*=1.1;
		}else 
			this.camera.zoom*=0.9;
		e.preventDefault();
	}
	keydown(e) {
		this.keys[e.keyCode] = true;
	}
	keyup(e) {
		this.keys[e.keyCode] = false;
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
					var i=document.getElementById(assets[node.image]);
					if(!i){
						var img=new Image();
						img.src="img/"+assets[node.image]+".png";
						var	i=document.body.appendChild(img);
						img.id=assets[node.image];
						i.hidden=true;
					}
					node.width=i.width;
					node.height=i.height;
					ctx.save();
					ctx.translate(adjusted.x,adjusted.y);
						ctx.rotate(node.rotation*Math.PI/180);
					//Sprites can have pivot points other than top left, these are described by bounds in swf but don't get saved on export
					let bound=bounds[assets[node.image]];
					if(bound)
						ctx.translate(bound[0]*this.camera.zoom/2,bound[1]*this.camera.zoom/2);
					ctx.scale(node.scaleX*this.camera.zoom,node.scaleY*this.camera.zoom);
					//if(node.rotation!=0){
					//ctx.restore();
					//	return;
					//	ctx.translate(node.width*this.camera.zoom/2,node.height*this.camera.zoom/2);
				//		ctx.drawImage(i,-node.width*this.camera.zoom/2,-node.height*this.camera.zoom/2);
				//	}else
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
		ctx.strokeStyle='black';
		ctx.lineWidth = 5;
		if(document.getElementById("showCollision").checked)
			this.physicsEdges.forEach((physicsEdges)=>{
				physicsEdges.forEach((edge,i)=>{
					const adjustedStart = this.cameraOffset(edge.start);
					const adjustedEnd = this.cameraOffset(edge.end);
					if(adjustedStart && adjustedEnd){
						ctx.beginPath();
						ctx.moveTo(adjustedStart.x, adjustedStart.y);
						ctx.lineTo(adjustedEnd.x, adjustedEnd.y);
						ctx.stroke();
						ctx.fillText(i,adjustedStart.x, adjustedStart.y);
					}
				});
			});
		ctx.fillStyle='red';
		ctx.strokeStyle='red';
		ctx.lineWidth = 1;
		if(document.getElementById("showAI").checked)
			this.aiEdges.flatMap(x=>x).forEach((edge,i)=>{
				const adjustedStart = this.cameraOffset(edge.start);
				const adjustedEnd = this.cameraOffset(edge.end);
				if(adjustedStart && adjustedEnd){
					ctx.beginPath();
					ctx.moveTo(adjustedStart.x, adjustedStart.y);
					ctx.lineTo(adjustedEnd.x, adjustedEnd.y);
					ctx.stroke();
					ctx.fillText(i,adjustedStart.x, adjustedStart.y);
				}
			});
		
		if(this.sel && this.mouse){
			const pos=this.mouse;
			this.ctx.fillStyle = '#40408020';
			this.ctx.fillRect(this.sel.x,this.sel.y,pos.x-this.sel.x,pos.y-this.sel.y, canvas.height);
		}
		//display the selected stuff TODO
		var target;
		switch(this.tab){
			case "ENTITY":target=this.selected.entities;break;
			case "NODE":target=this.selected.nodes;break;
			case "COLLISION":target=this.selected.physicsEdges;break;
			case "AI":target=this.selected.aiEdges;break;
			//case "ENTITY":target=this.selected.aiEdgeGraph;
			case "TILE":target=this.selected.tiles;break;
			case "OTHER":target=this.selected.other;break;
		}
		
		if(target && (this.selected.dispEntities!=target)){
			this.selected.dispEntities=target;
			const wrapped=target.map(this.wrapEntity.bind(this)).join('');
			document.getElementById("entities").innerHTML=this.tab+wrapped;
			if(wrapped.length>0)
				document.getElementById("entities").children[0].setAttribute('open','');
		}
	}
	wrapEntity(e){
		if(!e.x && e.x!=0){
			
		
	return `<details><summary style='cursor:pointer'><u>${this.tab.toLowerCase()} - ${e.start.id}(${e.start.x}, ${e.start.y}) ->${e.end.id}(${e.end.x}, ${e.end.y}) - Graph #${e.graph}</u></summary>${JSON.stringify(e)}</details>`;
		}
		var script=e.script||e.text;
		if(script || this.tab=="TILE"){
			//this is dumb
			script=script?(this.tab=="OTHER"?{name:script}:scripts[script]):{name:assets[e.image]};
			if(script)
				return `<details><summary style='cursor:pointer'><u>${this.tab.toLowerCase()} ${e.id}(${script.name})(${e.x}, ${e.y})</u></summary>
						<pre>${JSON.stringify(e,null,'\t')}</pre>${JSON.stringify(script)} 
					</details>`;
		}
	return `<details><summary style='cursor:pointer'><u>${this.tab.toLowerCase()} ${e.id} - (${e.x}, ${e.y}) </u></summary></details>`;
		
		//return "<pre><code>"+JSON.stringify(this.selected.entities,null,'\t')+"</code></pre>";
	}
}
const fe=document.getElementById("fileElem");
fe.onchange=()=>{
	try{
		file=fe.files[0];
		file.text().then(f=>{
			if(file.name.endsWith('.js')){
				const end=f.lastIndexOf(';');
				mapData=JSON.parse(f.substring(f.indexOf('=')+1,(end<0?f.length:end)));
			}else 
				mapData=JSON.parse(f);
			viewer.destroy();
			viewer = new Viewer(document.getElementById('canvas'));
		});
	}catch(e){
		alert(e);
	}finally{
		//document.getElementById('fileElem').files=[];
	}
}
(function(console) {
    console.save = function(data, filename) {
        if (!data) {
            console.error('Console.save: No data');
            return;
        }
        if (!filename) {
            filename = 'map.json';
        }
        var blob = new Blob([data], {encoding:"UTF-8",type:"text/plain;charset=UTF-8"}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }
})(console);
window.addEventListener('load',()=>{
	viewer = new Viewer(document.getElementById('canvas'));
});
