fl.trace("");
fl.trace("=== Custom - Convert to Bitmap 2x under _bmpConvertable folder ===");

var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var i = 0; i < libraryItems.length; i++)
{
	var item = libraryItems[i];
	if(item.name.indexOf("_bmpConvertable/") != -1)
	{
		if(item.itemType == "movie clip")
		{
			fl.trace("");
			fl.trace(item.name);
			library.editItem([item.name]);
		
			document.selectAll();			
			
			document.group();
			
			var selectionRect = document.getSelectionRect(); 			
			var initWidth = selectionRect.right - selectionRect.left;
			var initHeight = selectionRect.bottom - selectionRect.top;
			fl.trace("initWidth=" + initWidth + " " + "initHeight=" + initHeight);
			
			document.setTransformationPoint({x:0, y:0});			
			
			document.transformSelection(2, 0, 0, 2);						
			
			document.convertSelectionToBitmap();
					
			document.setTransformationPoint({x:0, y:0});			
			
			document.transformSelection(0.5, 0, 0, 0.5);
			
			selectionRect = document.getSelectionRect(); 			
			var newWidth = selectionRect.right - selectionRect.left;
			var newHeight = selectionRect.bottom - selectionRect.top;
			fl.trace("newWidth=" + newWidth + " " + "newHeight=" + newHeight);
			
			var deltaWidth = newWidth - initWidth;
			var deltaHeight = newHeight - initHeight;
			//fl.trace("deltaWidth=" + deltaWidth + " " + "deltaHeight=" + deltaHeight);
			//document.moveSelectionBy({x:deltaWidth, y:deltaHeight});	
		}
	}
}
document.exitEditMode();

fl.getDocumentDOM().selectAll();			
document.transformSelection(2, 0, 0, 2);		
