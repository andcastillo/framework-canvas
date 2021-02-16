let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;



function make(Mundo, attributo){
  return Object.assign({}, Mundo, attributo);
}
//////////////////////// Mundo inicial
let Mundo = {posiciones:[]};
////////////////////////


function setup() {
  createCanvas(400, 400);
}

function drawGame(Mundo){
  background(220);
  text(Mundo.posiciones,10,10);
}

function onTic(Mundo){
  text(mouseX,100,100);
  text(mouseY,140,100);
  return make(Mundo,{});
}




//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
  if (event.action == "press"){
    return make(Mundo, {posiciones: cons(cons(event.mouseX, cons(event.mouseY,[])),Mundo.posiciones)} );
  }else{
    return make(Mundo,{});
  }
};

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, event) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual

    if(isEmpty(Mundo) != true){
     return make(Mundo,{posiciones:rest(Mundo.posiciones)});
    }
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
