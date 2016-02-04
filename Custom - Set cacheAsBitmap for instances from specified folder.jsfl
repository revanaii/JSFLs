fl.outputPanel.clear();

fl.trace("");
fl.trace("=== Custom - Set cacheAsBitmap for instances from specified folder ===");

var convertableFolderName = "_bmpConvertable/";

var curr_doc = fl.getDocumentDOM();

var main_timeline = curr_doc.getTimeline();
var tab = "\t";
displayAllElements(main_timeline, tab);

function displayAllElements(theTimeline, theTab)
{
	var i = 0;

	while(i < theTimeline.layers.length)
	{
		var j = 0;
		while(j < theTimeline.layers[i].frames[0].elements.length)
		{

			if(theTimeline.layers[i].frames[0].elements[j].elementType == "instance")
			{
				if(theTimeline.layers[i].frames[0].elements[j].libraryItem.itemType == "movie clip")
				{

					var curr_lib_item = theTimeline.layers[i].frames[0].elements[j].libraryItem.name;
					
					var isUnderBmpConvertableFolder = curr_lib_item.indexOf(convertableFolderName) != -1;
					fl.trace(curr_lib_item + " isUnderBmpConvertableFolder " + isUnderBmpConvertableFolder);
					if(isUnderBmpConvertableFolder) 
					{
						theTimeline.layers[i].frames[0].elements[j].cacheAsBitmap = true;	
					}					
					
					curr_doc.library.editItem(curr_lib_item);
					var new_timeline = curr_doc.getTimeline();
					displayAllElements(new_timeline, theTab + tab);
				}
			}
			j++
		}
		i++;
	}
}

document.selectNone();
document.exitEditMode();
