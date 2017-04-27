fl.trace("");
fl.trace("=== Custom - Rename items - add postfix ===");

var folderName = "_parts/_Field2/";
var postfixToAdd = "_Field2";

var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var i = 0; i < libraryItems.length; i++)
{
	var item = libraryItems[i];
	if(item.name.indexOf(folderName) != -1)
	{
		library.selectItem(item.name);
		if(item.itemType == "folder") continue;
		var newName = item.name;
		fl.trace(" ");
		fl.trace("old name " + newName);
		var pos = folderName.length;
		newName = newName.slice(pos, newName.length);
		newName += postfixToAdd; 
		fl.trace("new Name " + newName);
		library.renameItem(newName);
	}
}