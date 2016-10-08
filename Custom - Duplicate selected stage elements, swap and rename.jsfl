fl.trace("");
fl.trace("=== Custom - Duplicate selected stage elements, swap and rename ===");

var oldNamePart = prompt("Name part to change:", "oldName");
var newNamePart = "";
if(oldNamePart) newNamePart = prompt("New name part:", "newName");
else oldNamePart = "";

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
			var newName = oldName.replace(oldNamePart, newNamePart);
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
