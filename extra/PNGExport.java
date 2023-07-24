import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
//takes all named sprites from ffdec exported folders, exports to (name).png in current folder
public class PNGExport{
	
	public static void main(String[] args) throws IOException{
		Files.walk(Paths.get("Z:\\Hydar 7\\A\\assets.nkstatic.com\\Games\\gameswfs\\sas4\\download\\libs"),1)
			.filter(x->x.toString().endsWith(".swf"))
			.forEach(x->{
				try{
				for(var file:Files.walk(x,2).toList()){
					var strs=file.getFileName().toString().split("_",3);
					if(strs.length>2){
						Files.copy(file.resolve("1.png"),Paths.get(strs[2]+".png"));
					}
				}}
				catch(Exception e){e.printStackTrace();}
			});
	}
}