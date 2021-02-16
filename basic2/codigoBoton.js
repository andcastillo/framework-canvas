let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;



function make(Mundo, attributo){
  return Object.assign({}, Mundo, attributo);
}
//////////////////////// Mundo inicial
let Mundo = { };
////////////////////////
var color = 240;


function setup() {
  frameRate(60);
  //processing.size(400, 400);
  createCanvas(400, 400); //Es necesario crear el Canvas
  background(15, 200, 50);
  Mundo = { x: 100, y: 100, ancho: 100, alto: 100 };
}

function drawGame(Mundo){
  background(10, 200, 50);
  fill(240, color, 240);
  rect(Mundo.x, Mundo.y, Mundo.ancho, Mundo.alto);
}

function onTic(Mundo){
  return make(Mundo, { x: Mundo.x + 1 });
}



function changeColor () {
      color = Math.round(Math.random() * 255);
}

function setSpeed (value) {
      frameRate(value);
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
    return make(Mundo,{});
};

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, event) {
    return make(Mundo,{});
}

//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////


// Esta es la función que pinta todo. Se ejecuta 60 veces por segundo.
// No cambie esta función. Su código debe ir en drawGame
function draw() {
  drawGame(Mundo);
  Mundo = onTic(Mundo);
};

// Esta función se ejecuta cada vez que presionamos una tecla.
// No cambie esta función. Su código debe ir en onKeyEvent
function keyPressed() {
  Mundo = onKeyEvent(Mundo, keyCode);
}

// Esta función se ejecuta cada vez movemos el mouse.
// No cambie esta función. Su código debe ir en onKeyEvent
function mouseMoved() {
  Mundo = onMouseEvent(Mundo,
    { action: "move", mouseX: mouseX, mouseY: mouseY });
}

// Estas funciones controlan los eventos del mouse.
// No cambie estas funciones. Su código debe ir en OnMouseEvent
function mouseClicked() {
  Mundo = onMouseEvent(Mundo,
    { action: "click", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}

function mouseDragged() {
  Mundo = onMouseEvent(Mundo,
    { action: "drag", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}

function mousePressed() {
  Mundo= onMouseEvent(Mundo,
    { action: "press", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}

function mouseReleased() {
  Mundo = onMouseEvent(Mundo,
    { action: "release", mouseX: mouseX, mouseY: mouseY, mouseButton: mouseButton });
}
