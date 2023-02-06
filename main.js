
let viewer;

class Viewer{
	static WIDTH = 1280
	static HEIGHT = 720;
	constructor(canvas){
		this.initCanvas(canvas);
		this.camera = {
			x:mapData.avatarSpawns[0].x,
			y:mapData.avatarSpawns[0].y,
			speed:8
		}
		this.keys = [];
		this.settings = {
			UP_KEY:87,
			DOWN_KEY:83,
			LEFT_KEY:65,
			RIGHT_KEY:68
		}
		this.physicsEdgeGraphs = mapData.physicsEdgeGraphs.map(graphId=>{
			return mapData.graphs.find(graph=>graph.id===graphId).nodes.map(id=>mapData.nodes.find(node=>id===node.id));
		});
		this.aiEdgeGraph = mapData.graphs.find(graph=>graph.id===mapData.aiPathingGraphs[0]).nodes.map(id=>mapData.nodes.find(node=>id===node.id));
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
			return this.edges.filter(edge=>physicsEdgeGraph.includes(edge.start) || physicsEdgeGraph.includes(edge.end))
		});
		this.aiEdges = this.edges.filter(edge=>this.aiEdgeGraph.includes(edge.start) || this.aiEdgeGraph.includes(edge.end));
		this.interval = setInterval(()=>{
			this.update();
			this.render();
		},1000/60);
	}
	initCanvas(canvas){
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.canvas.width = Viewer.WIDTH;
		this.canvas.height = Viewer.HEIGHT;
		window.addEventListener('keydown',this.keydown.bind(this));
		window.addEventListener('keyup',this.keyup.bind(this));
	}
	update(){
		this.handleInput();
	}
	/*Creates a shifted x and y of things to be drawn based on camera pos. Returns nothing if x and y are off map.*/
	cameraOffset(obj) {
		let adjustedX = (obj.x - (this.camera.x)) + canvas.width / 2;
		let adjustedY = (obj.y - (this.camera.y)) + canvas.height / 2;
		let oWidth = obj.width === undefined ? 0 : obj.width;
		let oHeight = obj.height === undefined ? 0 : obj.height;
		//if (adjustedX + oWidth < 0 || adjustedX > canvas.width || adjustedY > canvas.height || adjustedY + oHeight < 0)
		//	return;
		return {
			x: adjustedX,
			y: adjustedY
		};
	}
	handleInput() {
		if (this.keys[this.settings.UP_KEY]) {
			this.camera.y -= this.camera.speed;
		}
		if (this.keys[this.settings.DOWN_KEY]) {
			this.camera.y += this.camera.speed;
		}
		if (this.keys[this.settings.LEFT_KEY]) {
			this.camera.x -= this.camera.speed;
		}
		if (this.keys[this.settings.RIGHT_KEY]) {
			this.camera.x += this.camera.speed;
		}
		if (this.keys[this.settings.INTERACT_KEY]) {
			this.doInteract();
		}

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
		ctx.fillStyle='green';
		mapData.entities.forEach(node=>{
			const adjusted = this.cameraOffset(node);
			if(adjusted){
				ctx.fillRect(adjusted.x, adjusted.y, 20,20);
				ctx.fillText(node.id, adjusted.x, adjusted.y);
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

		/*
		ctx.strokeStyle='black';
		for(let i = 0; i < this.physicsEdgeGraph.length-1;i++){
			const adjustedStart = this.cameraOffset(this.physicsEdgeGraph[i]);
			const adjustedEnd = this.cameraOffset(this.physicsEdgeGraph[i+1]);
			if(adjustedStart && adjustedEnd){
				ctx.beginPath();
				ctx.moveTo(adjustedStart.x, adjustedStart.y);
				ctx.lineTo(adjustedEnd.x, adjustedEnd.y);
				ctx.stroke();
				ctx.fillText(i,adjustedStart.x, adjustedStart.y);
			}
		}
		*/
		ctx.fillStyle='black';
		ctx.strokeStyle='black';
		ctx.lineWidth = 5;
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
		this.aiEdges.forEach((edge,i)=>{
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
	}
}

window.addEventListener('load',()=>{
	viewer = new Viewer(document.getElementById('canvas'));
});
