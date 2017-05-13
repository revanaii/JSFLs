fl.trace("");
fl.trace("Revan - Convert to Bitmap 1x under _bmpConvertable folder");
fl.showIdleMessage(false);
var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var i = 0; i < libraryItems.length; i++)
{
	var item = libraryItems[i];
	if(item.name.indexOf("_bmpConvertable/") != -1)
	{
		if(item.itemType == "movie clip")
		{
			fl.trace(item.name);
			library.editItem([item.name]);
			fl.getDocumentDOM().selectAll();
			document.convertSelectionToBitmap();
		}
	}
}
document.exitEditMode();
fl.trace("");