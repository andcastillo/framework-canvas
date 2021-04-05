//Vamos a usar http://processingjs.org/
// o https://p5js.org/reference/

// Importamos las librerias
let { append, cons, first, isEmpty, isList, length, rest, map, forEach }  = functionalLight;

// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
const mySnake = [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 1 }];
let Mundo = { snake: mySnake, direction: 'RIGHT', food: [{ x: 5, y: 5 }], score: 0 }
const dx = 20;
const dy = 20;
////////////////////////




/**
 *Dibuja la serpiente
 */
function drawSnake(snake) {
  forEach(snake, part => {
    fill(240, 240, 240);
    rect(part.x * dx, part.y * dy, dx, dy);
  });
}
/**
 * Dibuja la comida
 */
function drawFood(food) {
  forEach(food, part => {
    fill(200, 20, 10);
    ellipse(part.x * dx, part.y * dy, dx, dy);
  });
}

/**
 * Dibuja el score
 */
function drawScore(score) {
  textFont('Georgia', 18);
  text("Score: " + score, 10, 380);
}


/**
 * Esto se llama antes de iniciar el juego
 */
function setup() {
  createCanvas(400, 400);
  background(10, 200, 50);
}

// Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
function drawGame(Mundo){
  drawSnake(Mundo.snake);
  drawFood(Mundo.food);
  drawScore(Mundo.score);

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
  return update(Mundo,{});
}
