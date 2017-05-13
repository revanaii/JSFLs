fl.trace("");
fl.trace("Revan - Export selected library items as PNGs");

var exportPath = fl.browseForFolderURL("Select export path");  
fl.trace(exportPath)

var document = fl.getDocumentDOM();
var library = document.library;
var items = library.items;
var selectedItems = fl.getDocumentDOM().library.getSelectedItems(); 

if(selectedItems.length == 0)
{
	alert("Select some library items first!");
}
else
{
	for(var i = 0; i < selectedItems.length; i++)
	{
		item = selectedItems[i];
		isFolder(item) ? iteratePath(item.name) : exportAsPNG(item);
	}
}

function iteratePath(path)
{
	for(var i = 0; i < items.length; i++)
	{
		var item = items[i];
		if(itemIsInPath(item, path))
		{
			isFolder(item) ? iteratePath(item.name) : exportAsPNG(item);
		}
	}
}

function itemIsInPath(item, path)
{
	return item.name.indexOf(path) != -1 && item.name != path;
}

function isFolder(item)
{
	return item.itemType == "folder";
}


function exportAsPNG(item)
{
	var path = exportPath + "/" + element.libraryItem.name + ".png";
	item.exportToPNGSequence(path);
}

fl.trace("");