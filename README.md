# framework-canvas

Licencia: MIT

Con este pequeño ejemplo, los estudiantes podrán crear pequeñas animaciones usando JavaScript. Para usarlo, solo debe clonar este repositorio.

## basic

El punto de entrada para entender cómo funciona el framework es el archivo [basic.html](basic.html). En este ejemplo se pinta un cuadrado que definimos usando una estructura. Por ahora no tiene ningun tipo de animación o interactividad.

``` js
 const square = { x: 100, y: 100, ancho: 100, alto: 100 };
 ...
 // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo
 processing.draw = function () {
    /**
     *Dibuja algo en el canvas
    */
    processing.background(10, 200, 50);
    processing.fill(240, 240, 240);
    processing.rect(square.x, square.y, square.ancho, square.alto);
};

``` 

Esta pequeño sketch tiene ya includa la librería para programación funcional que hemos ido desarrollando durante el curso, luego en cualquier parte podran usar las funciones append, cons, first, rest, isEmpty, isList, length, deepCopy, etc. Ejemplo

``` js
let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;
console.log(length(cons(8, [1, 2, 3])));

``` 

## ticEventExample

El segundo ejemplo de este proyecto es [ticEventExample.html](ticEventExample.html). En este ejemplo podrán encontrar un ejemplo sencillo, que mueve el rectángulo del ejemplo anterior, un pixel a la derecha por cada tic del programa. Para controlar la velocidad de refresque, debe cambiarse el parámetro **frameRate(ticsPorSegundo)** dentro de la función **setup()**

``` js
    processing.setup = function () {
      processing.frameRate(10);
      ...
``` 

## keyEventExample

En este tercer ejemplo, [keyEventExample](keyEventExample), ilustramos la forma de hacer un programa interactivo, que reacciona a los eventos de las flechas del teclado. En este caso, el rectángulo del primer ejemplo se mueve hacia donde le indiquemos con las flechas del teclado, 5 pixeles por evento.

## mouseEventExample

En este tercer ejemplo, [mouseEventExample](mouseEventExample), ilustramos la forma de hacer un programa interactivo, que reacciona a los eventos del mouse. En este caso, el rectángulo del primer ejemplo persigue por el canvas al puntero del mouse.


## buttonExample


## snakePintar


## snakeMovimiento

