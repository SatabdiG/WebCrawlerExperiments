var express=require('express');
var app=express();
var robot=require("robotjs");


robot.setMouseDelay(2);
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
 
for (var x = 0; x < width; x++)
{
    y = height * Math.sin((twoPI * x) / width) + height;
    var mouse = robot.getMousePos();
	var hex = robot.getPixelColor(mouse.x, mouse.y);
	console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
    robot.moveMouse(x, y);
}

// robot.typeString("Hello World");
// robot.keyTap("enter");



// app.get("/", function(req, res)
// {
// 	var mouse=robot.getMousePos();
// 	var hex=robot.getPixelColor(mouse.x, mouse.y);
// 	console.log("#"+hex+"at x:"+mouse.x+" at y:"+mouse.y);
// 	res.send("Hello World");

// });


// app.listen(3030, function(){
// 	console.log("Server is listening on 3030");
// });