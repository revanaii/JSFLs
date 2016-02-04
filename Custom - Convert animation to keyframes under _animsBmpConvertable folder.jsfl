fl.trace("");
fl.trace("=== Custom - Convert animation to keyframes under _animsBmpConvertable/ folder ===");

var library = fl.getDocumentDOM().library;
var libraryItems = library.items;
for(var l = 0; l < libraryItems.length; l++)
{
	var item = libraryItems[l];
	if(item.name.indexOf("_animsBmpConvertable/") != -1)
	{
		if(item.itemType == "movie clip")
		{
			fl.trace(" ");
			fl.trace(item.name);
			library.editItem([item.name]);

			var timeline = document.getTimeline();
			
			timeline.selectAllFrames();
			timeline.convertToKeyframes();
			timeline.setFrameProperty('tweenType', 'none');
		}
	}
}
document.exitEditMode();