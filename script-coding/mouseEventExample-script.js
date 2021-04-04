//Vamos a usar http://processingjs.org/
// o https://p5js.org/reference/

// Importamos las librerias
let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
let Mundo = {}
////////////////////////

/**
* Ejemplo de interacción de la aplicación con el mouse. Se reacciona al movimiento. No se implementan los Click
* La figura persigue al puntero.
*/

function setup() {
  frameRate(60);
  createCanvas(400, 400);
  background(15, 200, 50);
  Mundo = { x: 100, y: 100, ancho: 100, alto: 100 };
}

// Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
function drawGame(Mundo){
  background(10, 200, 50);
  fill(240, 240, 240);
  rect(Mundo.x, Mundo.y, Mundo.ancho, Mundo.alto);
}


// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  return update(Mundo,{});
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
  if (event.action === 'move') {
    return update(Mundo, { x: event.mouseX, y: event.mouseY })
  }
  return update(Mundo, {});
}


//Implemente esta función si quiere que su programa reaccione a eventos del teclado

function onKeyEvent (Mundo, keyCode) {
   return update(Mundo,{});
}
