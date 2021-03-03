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
  return deepCopy(Mundo,{});
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
  if (event.action == "press"){
    return deepCopy(Mundo, {posiciones: cons(cons(event.mouseX, cons(event.mouseY,[])),Mundo.posiciones)} );
  }else{
    return deepCopy(Mundo,{});
  }
};

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, event) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual

    if(isEmpty(Mundo) != true){
     return deepCopy(Mundo,{posiciones:rest(Mundo.posiciones)});
    }
    return deepCopy(Mundo,{});
}