//Vamos a usar http://processingjs.org/
// o https://p5js.org/reference/

// Importamos las librerias
let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
let Mundo = {carita:1};

let m1 = null;
let m2 = null;
let m3 = null;
let m4 = null;
////////////////////////

/**
 * Ejemplo de caritas que cambian cada segundo
 * No requiere interacción con el usuario
 */

function setup() {
  createCanvas(240, 290);
  frameRate(1);
  m1 = loadImage("images/m1.png");
  m2 = loadImage("images/m2.png");
  m3 = loadImage("images/m3.png");
  m4 = loadImage("images/m4.png");
}

// En esta función se pinta el mundo usando funciones de p5js
// Puede usar todas las funciones descritas aquí:
// https://p5js.org/es/reference/
function drawGame(Mundo){
  if (Mundo.carita == 1)
      image(m1, 0, 0);
  if (Mundo.carita == 2)
      image(m2, 0, 0);
  if (Mundo.carita == 3)
      image(m3, 0, 0);
  if (Mundo.carita == 4)
      image(m4, 0, 0);
}

// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  return update(Mundo,{carita: Math.ceil(Math.random() * 4)});
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
