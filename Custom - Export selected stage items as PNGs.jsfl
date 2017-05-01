fl.trace("");
fl.trace("=== Custom - Export selected stage items as PNGs ===");


var document = fl.getDocumentDOM();
var documentInitWidth = document.width;
var documentInitHeight = document.height;
var selection = document.selection;
for(var i = 0; i < selection.length; i++)
{
		var element = selection[i];
		if(element.elementType == "instance")
		{
			document.width = Math.ceil(element.width);	
			document.height = Math.ceil(element.height);
		
			var elementInitX = element.x;
			var elementInitY = element.y;
			element.x = 0;
			element.y = 0;			
			
			var layerName = element.layer.name;
			if(layerName == "align center")
			{
				element.x = element.width/2;
				element.y = element.height/2;	
			}			
			
			var path = document.pathURI.replace(document.name, "") + element.libraryItem.name + ".png";
			fl.trace(path);
			
			document.exportPNG(path, true, true);	
			
			element.x = elementInitX;
			element.y = elementInitY;
		}
}

document.width = documentInitWidth;	
document.height = documentInitHeight;
document.selectNone();