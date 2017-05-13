fl.trace("");
fl.trace("Revan - Export selected stage items as PNGs");

//var pathBase = document.pathURI.replace(document.name, "")
var exportPath = fl.browseForFolderURL("Select export path");  
fl.trace(exportPath)


var document = fl.getDocumentDOM();
var documentInitWidth = document.width;
var documentInitHeight = document.height;

offsetAllStageElements(3000);
exportElements();
offsetAllStageElements(-3000);

document.width = documentInitWidth;	
document.height = documentInitHeight;
document.selectNone();




function exportElements()
{
	var selection = document.selection;
	for(var i = 0; i < selection.length; i++)
	{
			var element = selection[i];
			if(element.elementType == "instance")
			{
				var layerName = element.layer.name;
				if(layerName == "trash")				
				{
					continue;
				}				
				
				document.width = Math.ceil(element.width);	
				document.height = Math.ceil(element.height);
			
				var elementInitX = element.x;
				var elementInitY = element.y;
				element.x = 0;
				element.y = 0;			
				
				if(layerName == "align_center")
				{
					element.x = element.width/2;
					element.y = element.height/2;	
				}			
				
				var path = exportPath + "/" + element.libraryItem.name + ".png";
				//fl.trace(path);
				
				document.exportPNG(path, true, true);	
				
				element.x = elementInitX;
				element.y = elementInitY;
			}
	}
}


function offsetAllStageElements(tmpElemetsOffset)
{
	var i = 0;
	var layers = fl.getDocumentDOM().getTimeline().layers;
	while(i < layers.length)
	{
		var j = 0;
		var elements = layers[i].frames[0].elements;
		while(j < elements.length)
		{
			var element = elements[j];
			element.x += tmpElemetsOffset;
			element.y += tmpElemetsOffset;
			j++
		}
		i++;
	}
}

fl.trace("");