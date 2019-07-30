# framework-canvas

Con este pequeño ejemplo, los estudiantes podrán crear pequeñas animaciones usando JavaScript. Para usarlo, solo debe clonar este repositorio.

El punto de entrada para entender cómo funciona el framework es el archivo basic.html. En este se pinta un cuadrado que definimos usando una estructura y se mueve usando las flechas del teclado.

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

Esta pequeño sketch tiene ya includa la librería para programación funcional que hemos ido desarrollando durante el curso, luego en cualquier parte podran usar las funciones append, cons, first, isEmpty, isList, length y rest. Ejemplo

``` js
let { append, cons, first, isEmpty, isList, length, rest } = functionalLight;
console.log(length(cons(8, [1, 2, 3])));

``` 

Licencia: MIT
