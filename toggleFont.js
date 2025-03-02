var fontArray = ["OpenDyslexic", "Times", "Arial"];
var fontIndex = 0;


function toggleFont() {
	fontIndex++;
	if(fontIndex > fontArray.length - 1)
	{
		fontIndex = 0;
	}
  document.body.style.fontFamily = fontArray[fontIndex];
} 