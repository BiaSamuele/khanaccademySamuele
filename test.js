
noStroke();
var y =298;
 // the starting size for the sun
 var sunSize = 30; 
draw = function () { 
 // the beautiful blue sky
 background(82, 222, 240);

 // The sun, a little circle on the horizon
 fill(255, 204, 0);
 ellipse(200, y, sunSize, sunSize);

 // The land, blocking half of the sun
 fill(76, 168, 67);
 rect(0, 300, 400, 100);
 
 sunSize = sunSize + 1;
}; 