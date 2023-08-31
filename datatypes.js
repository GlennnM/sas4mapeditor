
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
function paramsHTML(script){
	let html=document.createElement("form");
	html.action='#';
	html.dataset.script=script;
	for(let param of scripts[script].params){
		switch(param.type){
			case "short":
				//pick a tile or graph
				//include recently placed
				html.innerHTML += "<input placeholder='0-32767' type='number' min='0' max='32767'></input>" + param.name + "<br>";
				break;
			case "int":
				html.innerHTML += "<input placeholder='integer' type='number' min='-2147483648' max='2147483647'></input>" + param.name + "<br>";
				break;
			case "float":
				html.innerHTML += "<input placeholder='float' type='text' step='any'></input>" + param.name + "<br>";
				break;
			case "boolean":
				html.innerHTML += "<input type='checkbox'></input>" + param.name + "<br>";
				break;
			case "UTF8": 
				html.innerHTML += "<input placeholder='text' type='text'></input>" + param.name + "<br>";
				break;

		}
		//onclick use [...html]
	}
	
	return html.children.length?html:document.createTextNode("(none)");
}
function theParams(html){
	let script=html.dataset.script;
	let params=[]
	for(var i in [...html]){
		let param=scripts[script].params[i];
		switch(param.type){
			case "boolean":
				params.push(1*(html[i].checked));
				break;
			default:
				let func=window[""+param.type+"ToArray"];
				params.push(...func(html[i].value));
				break;
		}
	}
	return params;
}
toParams(165);
//other type is boolean(just use x*1 or something