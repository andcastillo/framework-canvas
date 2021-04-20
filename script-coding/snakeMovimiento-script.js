//Vamos a usar http://processingjs.org/
// o https://p5js.org/reference/

// Importamos las librerias
let { append, cons, first, isEmpty, isList, length, rest, map, forEach }  = functionalLight;

// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
let Mundo = {}
////////////////////////
/**
 * Actualiza la serpiente. Creando una nuevo cabeza y removiendo la cola
 */
function moveSnake(snake, dir) {
  const head = first(snake);
  return cons({x: head.x + dir.x, y: head.y + dir.y}, snake.slice(0, length(snake) - 1));
}

const dx = 20;
const dy = 20;


/**
 * Esto se llama antes de iniciar el juego
 */
function setup() {
  frameRate(5);
  createCanvas(400, 400);
  background(15, 200, 50);
  Mundo = {snake: [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }], dir: {x: 1, y: 0}, food: {x: 5, y: 5 }};
}

// Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
function drawGame(Mundo){
  background(10, 200, 50);
  fill(240, 240, 240);

  forEach(Mundo.snake, s => {
    rect(s.x * dx, s.y * dy, dx, dy);
  });

}


// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  return update(Mundo, {snake: moveSnake(Mundo.snake, Mundo.dir)});
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
   return update(Mundo,{});
}


/**
* Actualiza el mundo cada vez que se oprime una tecla. Retorna el nuevo stado del mundo
*/
function onKeyEvent (Mundo, keyCode) {
  // Cambiamos la dirección de la serpiente. Noten que no movemos la serpiente. Solo la dirección
  switch (keyCode) {
    case UP_ARROW:
      return update(Mundo, {dir: {y: -1, x: 0}});
      break;
    case DOWN_ARROW:
      return update(Mundo, {dir: {y: 1, x: 0}});
      break;
    case LEFT_ARROW:
      return update(Mundo, {dir: {y: 0, x: -1}});
      break;
    case RIGHT_ARROW:
      return update(Mundo, {dir: {y: 0, x: 1}});
      break;
    default:
      console.log(keyCode);
      return update(Mundo, {});
  }
}
