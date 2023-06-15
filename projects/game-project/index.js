var cursor = document.getElementById("cursor");
var cursor2 = document.getElementById("cursor2");

document.addEventListener("mousemove",function(e)
{
  cursor.style.cssText = cursor2.style.cssText = "left: "+e.clientX +
  "px; top: "+e.clientY +"px;";
})