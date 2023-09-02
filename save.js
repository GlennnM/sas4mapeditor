/**file saving and uploading functionality */
const fe=document.getElementById("fileElem");
fe.onchange=()=>{
	try{
		file=fe.files[0];
		file.text().then(f=>{
			if(file.name.endsWith('.js')){
				const end=f.lastIndexOf(';');
				mapData=JSON.parse(f.substring(f.indexOf('=')+1,(end<0?f.length:end)));
			}else {
				mapData=JSON.parse(f);
				if(mapData instanceof Array)
					mapData=mapData[0];
			}
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
