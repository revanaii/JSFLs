fl.trace("");
fl.trace("Revan - Rename selected library items - CamelCase");

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
		isFolder(item) ? iteratePath(item.name) : rename(item);
	}
}

function iteratePath(path)
{
	for(var i = 0; i < items.length; i++)
	{
		var item = items[i];
		if(itemIsInPath(item, path))
		{
			isFolder(item) ? iteratePath(item.name) : rename(item);
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

function rename(item)
{
	library.selectItem(item.name);
	var fullName = item.name;
	var separatedWithSlashParts = fullName.split("/");
	var oldName = separatedWithSlashParts[separatedWithSlashParts.length - 1];
	fl.trace("old name: " + oldName);
	var newName = toCamelCase(oldName); 
	fl.trace("new name: " + newName);
	library.renameItem(newName);
}

function toCamelCase(str) 
{
	var result = str.replace(/^([A-Z])|[\s-_]+(\w)/g, 
		function(match, p1, p2, offset) {
			if(p2) return p2.toUpperCase();
			return p1.toLowerCase();        
    });
	
	result = FirstChatToUpperCase(result);
	return result;
}


function FirstChatToUpperCase(str)
{
	return str.charAt(0).toUpperCase() + str.slice(1);	
}

fl.trace("");