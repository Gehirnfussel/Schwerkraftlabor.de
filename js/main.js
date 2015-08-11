/*  Some scripts and stuff
--------------------------*/



/*  Target-Blank for CSS-Class "external"
--------------------------*/
function externalLinks() {
	if (!document.getElementsByTagName) {return;}
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		if (anchor.getAttribute("href") && anchor.getAttribute("class") === "external") {
			anchor.target = "_blank";
		}
	}
}
window.onload = externalLinks;

// or in jQuery
/*
$('a[rel="external"]').attr('target', '_blank');
*/
