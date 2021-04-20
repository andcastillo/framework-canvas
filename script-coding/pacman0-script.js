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
 * Ejemplo de animación usando los evento de reloj del procesador. Es la animación mas simple.
 * No requiere interacción con el usuario
 */
const WIDTH = 400;
const HEIGHT = 400;
const SIZE = 40;
const mapa = [[1, 1, 1, 1, 1],
[1, 0, 2, 0, 1],
[1, 0, 0, 0, 1],
[1, 0, 1, 0, 1],
[1, 1, 1, 1, 1]];


function setup() {
  frameRate(2);
  createCanvas(WIDTH, HEIGHT);
  FOTO = loadImage('images/foto.png');
  Mundo = { time: 0, pacman: { x: 10, y: 1}, cookies: [{ x: 1, y: 2 }, { x: 2, y: 1 }], phantone: [{ x: 1, y: 10 }] };

}

// Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
function drawGame(Mundo){
  background(0, 0, 0);
  //Pintamos a pacman con la boca abierta
  fill(10, 240, 30);

  if (Mundo.time % 2 == 0)
    arc(Mundo.pacman.x * SIZE, Mundo.pacman.y * SIZE, SIZE, SIZE, -Math.PI * 3 / 4, Math.PI * 3 / 4);
  else
    arc(Mundo.pacman.x * SIZE, Mundo.pacman.y * SIZE, SIZE, SIZE, 0, Math.PI * 2);

  fill(250, 200, 30);
  const cookie1 = first(Mundo.cookies);
  ellipse(cookie1.x * SIZE, cookie1.y * SIZE, SIZE / 2, SIZE / 2);

  //Mostrar una imagen scalada
  //processing.translate(100 + SIZE / 2, 100 + SIZE / 2);
 // processing.rotate(Math.PI / 3.0);
  image(FOTO, 100 + SIZE / 2, 100 +  SIZE / 2 , SIZE, SIZE);
}


// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  return update(Mundo, { time: Mundo.time + 1, pacman: { x: Mundo.pacman.x - 1, y: Mundo.pacman.y } });
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
  return update(Mundo,{});
}


//Implemente esta función si quiere que su programa reaccione a eventos del teclado

function onKeyEvent (Mundo, keyCode) {
   return update(Mundo,{});
}
