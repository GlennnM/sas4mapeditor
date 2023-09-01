
function floatToArray(f)
{
    var buf = new ArrayBuffer(4);
    (new Float32Array(buf))[0] = f;
    let i8=(new Uint8Array(buf));   
    return [ i8[3] ,i8[2],i8[1],i8[0] ];
}
function arrayToFloat(f)
{
    let i8=(new Uint8Array(f));   
    return (new Float32Array(i8))[0];
}
function intToArray(f)
{
    var buf = new ArrayBuffer(4);
    (new Int32Array(buf))[0] = f;
    let i8=(new Uint8Array(buf));   
    return [ i8[3] ,i8[2],i8[1],i8[0] ];
}
function arrayToInt(f)
{
    let i8=(new Uint8Array(f));   
    return (new Int32Array(i8))[0];
}
function shortToArray(f)
{
    return [f>>8, f&0xff];
}
function arrayToShort(f)
{
    return ((f[1]<<8 )|f[0]);
}
function UTF8ToArray(f){
	return [
		...shortToArray(f.length),
		...Array.from(f).map(x=>x.codePointAt(0))
	]
}
function arrayToUTF8(f){
	var len=arrayToShort(f);
	return String.fromCharCode(...chars.slice(2,len));
}
function near(pos1,pos2){
	return Math.sqrt((pos1.x-pos2.x)**2 + (pos1.y-pos2.y)**2)<10;
}
function randomColor(seed){
	return "#"+(Object(seed*(9999999)%128)).toString(16).padStart(2,0)
	+(64+Object(seed*(999999)%192)).toString(16).padStart(2,0)
		+(Object(seed*(99999)%256)).toString(16).padStart(2,0);
}
function describeGraph(id){
	return (mapData.physicsEdgeGraphs.includes(id)?
				"physics ":
				mapData.aiPathingGraphs.includes(id)?
				"ai ":"")+"graph #"+id;
}
//make a selector for id's from a list
function list(ids, target, graphOrTile=false, numRecents=0){
	let html=document.createElement("select");
	html.style="width:120px";
	let i=0;
	for(let id of ids){
		let op= document.createElement("option");
		let typeId=graphOrTile?
			describeGraph(id):
			
			mapData.tiles.find(x=>x.id==id).image
		;
		op.innerText=
			((i<numRecents)?"(RECENT) ":" ") +
			((graphOrTile)?typeId+" graph ":assets[typeId])+": "+id;
		html.appendChild(op);
		i++;
	}
	html.addEventListener('input',()=>{
		document.getElementById(target).value=html.value.split(" ").pop()
	});
	return html;
}
function paramsHTML(script,prev=[]){
	let html=document.createElement("form");
	html.action='#';
	html.dataset.script=script;
	for(let param of scripts[script].params){
		let id="param_"+param.id;
		let input;
		switch(param.type){
			case "short":
				//pick a tile or graph
				//include recently placed
				input=document.createElement("input");
				Object.assign(input,{
					placeholder:'0-32767',
					type:'number',
					min:'0',
					max:'32767',
					id:id,
				});
				html.insertAdjacentText("beforeend",param.name+" (pick ->)")
				html.appendChild(input);
				let recent=viewer.recentTiles?viewer.recentTiles:[];
				html.appendChild(list([...recent,...mapData.tiles.map(x=>x.id)],id,false,recent.length));
				let recent2=viewer.recentGraphs?viewer.recentGraphs:[];
				//console.log(recent);
				html.appendChild(list([...recent2,...mapData.graphs.map(x=>x.id)],id,true,recent2.length));
				
				break;
			case "int":
				input=document.createElement("input");
				Object.assign(input,{
					placeholder:'integer',
					type:'number',
					min:'-2147483648',
					max:'2147483647',
					id:id,
				});
				break;
			case "float":
				input=document.createElement("input");
				Object.assign(input,{
					placeholder:'float',
					type:'text',
					min:'-2147483648',
					max:'2147483647',
					id:id,
					step:'any'
				});
				break;
			case "boolean":
				input=document.createElement("input");
				Object.assign(input,{
					type:'checkbox',
					id:id
				});
				break;
			case "UTF8": 
				input=document.createElement("input");
				Object.assign(input,{
					placeholder:'text',
					type:'text',
					id:id
				});
				break;

		}
		if(param.type!="short" ){
			html.appendChild(input);
			let label=document.createElement("label");
			label.htmlFor=id;
			label.innerText=param.name;
			html.appendChild(label);
		}
		html.appendChild(document.createElement("br"));
		//onclick use [...html]
	}
	for(let i in prev){
		[...html][i].value=prev[i];
	}
	return html.children.length?html:document.createTextNode("(none)");
}
function assetImg(id){
	let i=document.getElementById(assets[id]);
	if(!i){
		var img=new Image();
		img.src="img/"+assets[id]+".png";
		i=document.body.appendChild(img);
		img.id=assets[id];
		i.hidden=true;
	}
	return i;
}

function theParams(html){
	if(!html || !(html instanceof HTMLFormElement))return [];
	let script=html.dataset.script;
	let params=[];
	let target=[...html.querySelectorAll("input")];
	for(var i in target){
		let param=scripts[script].params[i];
		switch(param.type){
			case "boolean":
				params.push((target[i].checked)&1);
				break;
			default:
				let func=window[""+param.type+"ToArray"];
				params.push(...func(target[i].value));
				break;
		}
	}
	return params;
}
//other type is boolean(just use x*1 or something