var page=require("webpage").create();
page.open("http://detectmybrowser.com/", function(status)
{
	var content=page.content;
	//console.log("Conetnt :"+content);
	console.log("status is:"+status);
	if(window.DOMParser)
	{
		parser = new DOMParser();
		xmldoc = parser.parseFromString(content, "text/xml");

	}
	var alllinks = xmldoc.getElementsByTagName("a");
	alllinks.forEach(function(val){
		console.log("Links are"+)
	});
	phantom.exit();
});
