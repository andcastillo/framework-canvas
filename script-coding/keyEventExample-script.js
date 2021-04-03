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
 * Esto se llama antes de iniciar el juego
 */

function setup() {
  frameRate(6);
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
  return update(Mundo,{});
}

/**
* Actualiza el mundo cada vez que se oprime una tecla. Retorna el nuevo stado del mundo
*/
function onKeyEvent (Mundo, keyCode) {

  console.log(keyCode);
  switch (keyCode) {
    case UP_ARROW:
      return update(Mundo, { y: Mundo.y - 5 });
      break;
    case DOWN_ARROW:
      return update(Mundo, { y: Mundo.y + 5 });
      break;
    case LEFT_ARROW:
      return update(Mundo, { x: Mundo.x - 5 });
      break;
    case RIGHT_ARROW:
      return update(Mundo, { x: Mundo.x + 5 });
      break;
    case 107:
      return update(Mundo, { alto: Mundo.alto + 5 });
      break;
    case 109:
      return update(Mundo, { alto: Mundo.alto - 5 });
      break;
    default:
      console.log(keyCode);
      return update(Mundo, {});
  }
}
