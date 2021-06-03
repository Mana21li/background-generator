var cssCode = document.querySelector('code');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('body');

function changeColor(){
	body.style.background = "linear-gradient(to right, " +color1.value + ", " + color2.value + ")";
	cssCode.textContent ="background: " + body.style.background + ";";
}

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);
