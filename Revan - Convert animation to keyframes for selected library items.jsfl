fl.trace("");
fl.trace("Revan - Convert animation to keyframes for selected library items");

var library = fl.getDocumentDOM().library;
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
		isFolder(item) ? iteratePath(item.name) : convert(item);
	}
}


function iteratePath(path)
{
	for(var i = 0; i < items.length; i++)
	{
		var item = items[i];
		if(itemIsInPath(item, path))
		{
			isFolder(item) ? iteratePath(item.name) : convert(item);
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

function convert(item)
{
	if(item.itemType == "movie clip")
	{
		fl.trace(" ");
		fl.trace(item.name);
		library.editItem([item.name]);

		var timeline = document.getTimeline();
		
		timeline.selectAllFrames();
		timeline.convertToKeyframes();
		timeline.setFrameProperty('tweenType', 'none');
	}
}


document.exitEditMode();
fl.trace("");