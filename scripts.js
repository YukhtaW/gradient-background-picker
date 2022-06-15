var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random-button");
// var copy = document.querySelector("h4");



function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
// RGB VARIAMT
/* function randomColor(){
    var o = Math.round,
        r = Math.random,
        s = 255;
    var color = 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
    var colorR = 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
    body.style.background = "linear-gradient(to right, " + color + ", " + colorR + ")";
    color1.value = "#ff0000";
    css.textContent = body.style.background + ";"; 
} */
function randomColor(){
    var color = "#"+Math.floor(Math.random()*16777215).toString(16);
    var colorR = "#"+Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    body.style.background = "linear-gradient(to right, " + color + ", " + colorR + ")";
    color1.value = color;
    color2.value = colorR;
    css.textContent = body.style.background + ";"; 
}
css.onclick = function(){
    document.execCommand("copy");
}
css.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", css.textContent);
    }
  });

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColor);
