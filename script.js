// Here's the logics begins
var start = new Date().getTime(); 
function getRandomColor() { // generate the random colors
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/* /*Objective the box move randomily on the screen and
    change its height and width accordingily */ 
function move() {
  var left = Math.random() * 300; //generate a random number between 0-300
  var top = Math.random() * 300;
  var wh = (Math.random() * 400) + 100; // generate a random width between 100-400 range
// setting the units for the virtual effects
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.width = wh + "px";
  document.getElementById("shape").style.height = wh + "px";
  document.getElementById("shape").style.display = "block";
  document.getElementById("shape").style.backgroundColor = getRandomColor();

  start = new Date().getTime(); //calculating the time
}

move();//function calling

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  var end = new Date().getTime();
  var time_taken = (end - start) / 1000;
  alert("Time Taken in Seconds = " + time_taken);
  move();
}