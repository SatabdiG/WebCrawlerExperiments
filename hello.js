var page=require('webpage').create();
page.open('http://example.com', function(status){

console.log("Status :: "+status);
if(status == "success")
{

 page.render('example.png');
}

var title=page.evaluate(function(){

return document.title;

});

console.log("Name of element is "+title);
phantom.exit();
});
