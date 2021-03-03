let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

/**
 * Realiza una copia profunda(recursiva) del objeto que se pasa como parámetro
 * @param {object} value 
 * @returns {object}
 * @example deepCopy({a: 10, b: {a: 45}}); // => {a: 10, b: {a: 45}}
 */
let deepCopy = function (value) {
  return JSON.parse(JSON.stringify(value));
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
  return deepCopy(Mundo, { x: Mundo.x + 1 });
}


/**
 * Esta función se llama desde el HTML
 */
function changeColor () {
      color = Math.round(Math.random() * 255);
}

/**
 * Esta función se llama desde el HTML
 */
function setSpeed (value) {
      frameRate(value);
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
    return deepCopy(Mundo,{});
};

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, event) {
    return deepCopy(Mundo,{});
}
