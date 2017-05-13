fl.trace("");
fl.trace("Revan - Duplicate selected stage elements, swap and rename");

var oldNamePart = prompt("Name part to change:", "oldName");
var newNamePart = "";
newNamePart = prompt("New name part:", "newName");

var document = fl.getDocumentDOM();
var library = document.library;
var selection = document.selection;
for(var i = 0; i < selection.length; i++)
{
		var element = selection[i];
		if(element.elementType == "instance")
		{	
			library.selectNone();			
			
			var oldName = element.libraryItem.name;
			fl.trace(oldName);
			
			library.duplicateItem(oldName);
			
			library.selectItem(oldName + " copy");
			var newName;
			if(oldNamePart)
			{
				newName = oldName.replace(oldNamePart, newNamePart);
			}
			else
			{
				newName = oldName + newNamePart;
			}
			library.renameItem(newName);
			
			fl.trace(element);
			//fl.selectElement(element, false);			
			//document.swapElement(newName);
			element.libraryItem = library.getSelectedItems()[0];
			
			
			/*var oldName = element.libraryItem.name;
			var newName = oldName.replace("Day", "Night");
			fl.trace(newName);
			document.duplicateSelection();*/
		}
}
document.selectNone();
fl.trace("");