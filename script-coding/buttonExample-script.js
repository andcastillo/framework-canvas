let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
let Mundo = { };
////////////////////////
var colorN = 240;


function setup() {
  frameRate(60);
  //processing.size(400, 400);
  createCanvas(400, 400); //Es necesario crear el Canvas
  background(15, 200, 50);
  Mundo = { x: 100, y: 100, ancho: 100, alto: 100};
}

function drawGame(Mundo){
  background(10, 200, 50);
  fill(240, colorN, 240);
  rect(Mundo.x, Mundo.y, Mundo.ancho, Mundo.alto);
}

function onTic(Mundo){
  return update(Mundo, { x: Mundo.x + 1 });
}


/**
 * Esta función se llama desde el HTML
 */
function changeColor () {
  colorN = Math.round(Math.random() * 255);
}

/**
 * Esta función se llama desde el HTML
 */
function setSpeed (value) {
      frameRate(value);
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
    return update(Mundo,{});
};

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, keyCode) {
    return update(Mundo,{});
}
