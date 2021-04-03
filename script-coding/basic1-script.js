let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
let Mundo = { x: 0, y: 0, ancho: 200, alto: 100 };
////////////////////////


function setup() {
  createCanvas(400, 400);
  frameRate(10);
  //processing.size(400, 400);
  noLoop();
}
// En esta función se pinta el mundo usando funciones de p5js
// Puede usar todas las funciones descritas aquí:
// https://p5js.org/es/reference/
function drawGame(Mundo){
  background(0, 255, 255);
  fill(240, 10, 240);
  strokeWeight(1);
  rect(Mundo.x, Mundo.y, Mundo.ancho, Mundo.alto);
}

// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  return update(Mundo,{});
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
  return update(Mundo,{});
}

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, keyCode) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
  return update(Mundo,{});
}


//////////////////////////////////////////////////////////////////////////
// Esta parte está como ilustración.
// Estas son las llamadas a las funciones de p5js
// El estudiante no se debe preocupar por esto, pero se deja de referencia
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
