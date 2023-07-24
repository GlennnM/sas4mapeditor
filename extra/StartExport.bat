rem Exports all sprites from all asset swfs(assuming you downloaded all of them)
for %%x in (*.swf) do (
	start "" java -jar -Xmx6G -Djna.nosys=true "C:\Program Files (x86)\FFDec\ffdec.jar" -format sprite:png -onerror ignore -export sprite "./sprites" %%x
	timeout /t 1
)
