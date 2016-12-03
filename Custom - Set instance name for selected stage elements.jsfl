fl.trace("");
fl.trace("=== Custom - Set instance name for selected stage elements ===");

var instanceName = prompt("Instance name:", "instance");

var document = fl.getDocumentDOM();
var library = document.library;
var selection = document.selection;
for(var i = 0; i < selection.length; i++)
{
		var element = selection[i];
		if(element.elementType == "instance")
		{	
			element.name = instanceName;
		}
}
document.selectNone();
