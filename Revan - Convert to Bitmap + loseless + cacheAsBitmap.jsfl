fl.trace("");
fl.trace("Revan - Convert to Bitmap + loseless + cacheAsBitmap");
fl.showIdleMessage(false);

var path = fl.scriptURI;
var indices = [];
for(var i=0; i<path.length;i++) {
    if (path[i] === "/") indices.push(i);
}

var lastSlashIndex = indices[indices.length - 1];
path = path.substring(0, lastSlashIndex + 1);
fl.trace('path ' + path);

function runScript(scriptName)
{
	scriptName = scriptName.replace(' ', '%20');
	fl.runScript(path + scriptName);
}

runScript('Revan - Convert to Bitmap 1x under _bmpConvertable folder.jsfl');
runScript('Revan - Set all bitmaps loseless.jsfl');
runScript('Revan - Set cacheAsBitmap for instances under _bmpConvertable.jsfl');

fl.trace("");
