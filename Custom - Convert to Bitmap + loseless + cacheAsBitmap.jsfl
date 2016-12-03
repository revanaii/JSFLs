fl.trace("");
fl.trace("=== Custom - Convert to Bitmap + loseless + cacheAsBitmap ===");
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

runScript('Custom - Convert to Bitmap 1x under _bmpConvertable folder.jsfl');
runScript('Custom - Set all bitmaps loseless.jsfl');
runScript('Custom - Set cacheAsBitmap for instances from specified folder.jsfl');


