fl.trace("");
fl.trace("Revan - Remove filters for all stage textfields");

var curr_doc = fl.getDocumentDOM();

var main_timeline = curr_doc.getTimeline();
var tab = "\t";

iterate(main_timeline, tab);

function iterate(theTimeline, theTab)
{
	var i = 0;
	var layers = theTimeline.layers;
	while(i < layers.length)
	{
		var j = 0;
		var elements = layers[i].frames[0].elements;
		while(j < elements.length)
		{
			var element = elements[j];
			if(element.elementType == "instance")
			{
				if(element.libraryItem.itemType == "movie clip")
				{
					var curr_lib_item = element.libraryItem.name;
					curr_doc.library.editItem(curr_lib_item);
					var new_timeline = curr_doc.getTimeline();
					iterate(new_timeline, theTab + tab);
				}
			}
			else if(element.elementType == "text")
			{
				element.filters = [];	
			}
			j++
		}
		i++;
	}
}

document.selectNone();
document.exitEditMode();
fl.trace("");
