let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;


// Actualiza los atributos del objeto y retorna una copia profunda
function update(data, attribute) {
  return Object.assign({}, data, attribute);
}

//////////////////////// Mundo inicial
let Mundo = {posiciones:[]};
////////////////////////


function setup() {
  createCanvas(400, 400);
}

// En esta función se pinta el mundo usando funciones de p5js
// Puede usar todas las funciones descritas aquí:
// https://p5js.org/es/reference/
function drawGame(Mundo){
  background(220);
  text(Mundo.posiciones,10,10);
}

// Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
function onTic(Mundo){
  text(mouseX,100,100);
  text(mouseY,140,100);
  return update(Mundo,{});
}

//Implemente esta función si quiere que su programa reaccione a eventos del mouse
function onMouseEvent (Mundo, event) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
  if (event.action == "press"){
    return update(Mundo, {posiciones: cons(cons(event.mouseX, cons(event.mouseY,[])),Mundo.posiciones)} );
  }else{
    return update(Mundo,{});
  }
};

//Implemente esta función si quiere que su programa reaccione a eventos del teclado
function onKeyEvent (Mundo, keyCode) {
  // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual

    if(isEmpty(Mundo) != true){
     return update(Mundo,{posiciones:rest(Mundo.posiciones)});
    }
    return update(Mundo,{});
}
