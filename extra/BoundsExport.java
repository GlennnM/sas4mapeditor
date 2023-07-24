import java.nio.file.Files;
import java.nio.file.Paths;

import com.eclipsesource.json.JsonArray;
import com.eclipsesource.json.JsonObject;
import com.jpexs.decompiler.flash.SWF;
import com.jpexs.decompiler.flash.tags.DefineSpriteTag;
import com.jpexs.decompiler.flash.tags.Tag;

/**
 * Exports all sprite bounds from a folder containing all sas4 library swfs
 * Uses FFdec libraries.
 * */
public class BoundsExport {
	//
	public static void main(String[] args) throws Exception {
		var map = new JsonObject();
		Files.walk(Paths.get("Z:\\Hydar 7\\A\\assets.nkstatic.com\\Games\\gameswfs\\sas4\\download\\libs\\"),1)
			.filter(x -> x.toString().endsWith(".swf"))
			.forEach(x -> {
				try {
					SWF swf = new SWF(Files.newInputStream(x), true);
					for (Tag t : swf.getTags()) {
						if (t instanceof DefineSpriteTag st) {
							String[] name=st.getCharacterExportFileName().split("_",2);
							if(name.length<2)
								continue;
							var rect=st.getRect();
							//divide by 20 they are in twips(.05px)
							map.set(name[1],new JsonArray().add(rect.Xmin/20).add(rect.Ymin/20));
						}
					}
				} catch (Exception oie) {}
			});
		Files.writeString(Paths.get("./bounds.json"),map.toString());
		System.out.println("Outputted sprite bounds.");
	}

}
