

let canvas = document.getElementById("canvas");
// MY Vars;
let colorBlack = document.getElementById("div-black");
let colorBlue = document.getElementById("div-blue");
let colorRed = document.getElementById("div-red");
let colorYellow = document.getElementById("div-yellow");
let colorOrange = document.getElementById("div-orange");
let colorGreen = document.getElementById("div-green");
let colorPink = document.getElementById("div-pink");
let colorPurple = document.getElementById("div-purple");
let eraserColor = document.getElementById("div-white");
let btnClear = document.getElementById("clear");
let divPaintColor = "div-black";

//My DOMS;
canvas.addEventListener("mousemove", paintIt);
colorBlack.addEventListener("click", changeColors);
colorBlue.addEventListener("click", changeColors);
colorRed.addEventListener("click", changeColors);
colorYellow.addEventListener("click", changeColors);
colorOrange.addEventListener("click", changeColors);
colorGreen.addEventListener("click", changeColors);
colorPink.addEventListener("click", changeColors);
colorPurple.addEventListener("click", changeColors);
eraserColor.addEventListener("click", changeColors);
btnClear.addEventListener("click", clearCanvas);

// My functions;

function changeColors(e) {
  if (e.target.id === "div-black") {
    divPaintColor = "div-black";
  } else if (e.target.id === "div-blue") {
    divPaintColor = "div-blue";
  } else if (e.target.id === "div-red") {
    divPaintColor = "div-red";
  } else if (e.target.id === "div-yellow") {
    divPaintColor = "div-yellow";
  } else if (e.target.id === "div-orange") {
    divPaintColor = "div-orange";
  } else if (e.target.id === "div-green") {
    divPaintColor = "div-green";
  } else if (e.target.id === "div-pink") {
    divPaintColor = "div-pink";
  } else if (e.target.id === "div-purple") {
    divPaintColor = "div-purple";
  } else if (e.target.id === "div-white") {
    divPaintColor = "div-white";
  }
}
//feature fucntions:
function clearCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}


function paintIt(event) {
  let steadyC = canvas.getBoundingClientRect();
  if (event.buttons === 1) {
    let x = event.clientX - steadyC.left;
    let y = event.clientY - steadyC.top;
    let newDiv = document.createElement("div");
    newDiv.className = `divPaint ${divPaintColor}`;
    newDiv.style.position = "absolute";
    newDiv.style.left = `${x}px`;
    newDiv.style.top = `${y}px`;
    canvas.append(newDiv);
  }
}
