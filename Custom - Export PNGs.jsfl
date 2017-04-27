fl.trace("");
fl.trace("=== Custom - Export PNGs ===");

var folderName = "_ToExport";
var pathToExport = "file:///C|/Users/revan/Desktop/TMP/icons/";

var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var i = 0; i < libraryItems.length; i++)
{
	var item = libraryItems[i];
	if(item.name.indexOf(folderName) != -1)
	{
		library.selectItem(item.name);
		if(item.itemType == "folder") continue;
		fl.trace(" ");
		fl.trace("item " + item.name);
		var path = pathToExport + item.name + ".png";
		fl.trace(path);
		item.exportToPNGSequence(path);
	}
}