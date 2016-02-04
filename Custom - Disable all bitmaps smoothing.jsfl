fl.trace("");
fl.trace("=== Custom - Disable all bitmaps smoothing ===");

var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var i = 0; i < libraryItems.length; i++)
{
	var item = libraryItems[i];
	if(item.itemType == "bitmap")
	{
		item.compressionType = "lossless";
		item.useDeblocking = false;
		item.allowSmoothing = false;
		fl.trace(item.name + " useDeblocking=" + item.useDeblocking + " allowSmoothing=" + item.allowSmoothing);
	}
}