fl.trace("");
fl.trace("Revan - Scale selected library items");

var scale = prompt("Scale", 1);
scale = parseFloat(scale);

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
		isFolder(item) ? iteratePath(item.name) : resize(item);
	}
}


function iteratePath(path)
{
	for(var i = 0; i < items.length; i++)
	{
		var item = items[i];
		if(itemIsInPath(item, path))
		{
			isFolder(item) ? iteratePath(item.name) : resize(item);
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


function resize(item)
{
	library.editItem([item.name]);
	document.selectAll();			
	//document.group();
	document.transformSelection(scale, 0, 0, scale);
}

document.exitEditMode();
fl.trace("");