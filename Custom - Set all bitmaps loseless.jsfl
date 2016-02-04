fl.trace("");
fl.trace("=== Custom - Set all bitmaps loseless ===");

var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var i = 0; i < libraryItems.length; i++)
{
	var item = libraryItems[i];
	if(item.itemType == "bitmap")
	{
		item.compressionType = "lossless";
		fl.trace(item.name + " compressionType=" + item.compressionType);
	}
}