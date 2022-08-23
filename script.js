const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const css = document.querySelector("h3");
const body = document.getElementById("gradient");

function colorPicker() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorPicker);
color2.addEventListener("input", colorPicker);
color3.addEventListener("input", colorPicker);
