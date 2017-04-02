var page=require('webpage').create();

page.onResourceRequested = function(request)
{
	console.log('Request'+ JSON.stringify(request, undefined, 4));
};

page.onResourceReceived=function(response)
{
	console.log('Response' + JSON.stringify(response, undefined, 4));
};

page.open("http://example.com", function(status){

console.log("Status :: "+ status);
phantom.exit();	
	
});

