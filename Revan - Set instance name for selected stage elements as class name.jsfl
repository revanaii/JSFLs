fl.trace("");
fl.trace("Revan - Set instance name for selected stage elements as class name");

var document = fl.getDocumentDOM();
var library = document.library;
var selection = document.selection;
for(var i = 0; i < selection.length; i++)
{
		var element = selection[i];
		if(element.elementType == "instance")
		{	
			var className = element.libraryItem.linkageClassName;
			element.name = className != null ? className : '';
		}
}
document.selectNone();
fl.trace("");