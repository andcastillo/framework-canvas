# framework-canvas

Licencia: MIT

Con este pequeño ejemplo, los estudiantes podrán crear pequeñas animaciones usando JavaScript. Para usarlo, solo debe clonar este repositorio. Se debería usar junto con este [repositorio para manejo de listas](https://github.com/andcastillo/functional-light) 

La documentación de la librería con la cúal pueden realizar los gráficos es [processing.js](http://processingjs.org/reference/). Vayan para saber sobre todas las posibilidades de la librería.

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

### Ejercicio 1

Diseñar e implementar un programa que muestra un cuadrado rebotando de izquierda a derecha, sin salirse del canvas que lo contiene. Pista: debe agragar un nuevo atributo al mundo que indique a dirección del movimiento.


### Ejercicio 2

Diseñar e implementar un programa que muestra un cuadrado que se mueve en ángulos de 45 grados, rebotando en una caja cuadrada
sin salirse del canvas que lo contiene. Pista: debe agragar dos nuevos atributos al mundo que indiquen las dirección del movimiento.


## keyEventExample

En este tercer ejemplo, [keyEventExample.html](keyEventExample.html), ilustramos la forma de hacer un programa interactivo, que reacciona a los eventos de las flechas del teclado. En este caso, el rectángulo del primer ejemplo se mueve hacia donde le indiquemos con las flechas del teclado, 5 pixeles por evento.

## mouseEventExample

En este cuarto ejemplo, [mouseEventExample.html](mouseEventExample.html), ilustramos la forma de hacer un programa interactivo, que reacciona a los eventos del mouse. En este caso, el rectángulo del primer ejemplo persigue por el lienzo al puntero del mouse.


## buttonExample

En este quinto ejemplo, [buttonExample.html](buttonExample.html), mostramos como crear 4 botones de HTML y hacer que los eventos de estos botones interactuen con la animación del rectágulo del primer ejemplo.

## snakePintar

Este ejemplo, [snakePintar.html](snakePintar.html),  ilustra una idea para pintar en el lienzo, un objeto mucho mas complejo que el cuadrado. En este caso, pintamos una lista de cuadrados sobre el lienzo. Es una idea de cómo se puede pintar la serpiente en el juego de SnakeJS. No tiene animaciones. Se puede poner como reto a los estudiantes que implementen el movimiento de esta serpiente usando lo que saben.

## snakeMovimiento

[snakeMovimiento.html](snakeMovimiento.html) es un ejemplo mucho más completo, sobre como realizar la animación y el movimiento de la serpiente en nuestro SnakeJS. La serpiente cambia de dirección con las flechas del teclado.

## imageExample

[imageExample.html](imageExample.html) es un ejemplo que muestra, como en lugar de pintar una figura geométrica, podemos cargar y pintar una imagen que cargamos desde un archivo.
