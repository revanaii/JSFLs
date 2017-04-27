fl.trace("");
fl.trace("=== Custom - Resize items under folder ===");

var folderName = "_ShopIcons/_Big/";
var scale = 100/72;

var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var i = 0; i < libraryItems.length; i++)
{
	var item = libraryItems[i];
	if(item.name.indexOf(folderName) != -1)
	{
		library.editItem([item.name]);
		document.selectAll();			
		//document.group();
		document.transformSelection(scale, 0, 0, scale);	
	}
}
document.exitEditMode();