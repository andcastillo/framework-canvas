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
 * Ejemplo de caritas que cambian cada segundo
 * No requiere interacción con el usuario
 */

function setup() {
  frameRate(10);
  createCanvas(240, 290);
  Mundo = {foto: loadImage("images/foto.png")}
}

// En esta función se pinta el mundo usando funciones de p5js
// Puede usar todas las funciones descritas aquí:
// https://p5js.org/es/reference/
function drawGame(Mundo){
  image(Mundo.foto, 20, 20);
}

// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  return update(Mundo,{});
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
  return update(Mundo,{});
}

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, keyCode) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
  return update(Mundo,{});
}
