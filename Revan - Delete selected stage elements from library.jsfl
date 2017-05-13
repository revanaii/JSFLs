fl.trace("");
fl.trace("Revan - Delete selected stage elements from library");

var document = fl.getDocumentDOM();
var library = document.library;
var selection = document.selection;
for(var i = 0; i < selection.length; i++)
{
		var element = selection[i];
		if(element.elementType == "instance")
		{			
			library.deleteItem(element.libraryItem.name);
		}
}
document.selectNone();
fl.trace("");