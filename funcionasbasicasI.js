// EJERCICIO 1

function a() {
    return 35;
}
console.log(a())

// Resultado da 35 porque corresponde al valor de a que sale por consola

// EJERCICIO 2

function a() {
    return 4;
}
console.log(a() + a());

// Resultado es 8, ya que el valor de a es 4 y en la salida de consola se suma 4+4

// EJERCICIO 3

function a(b) {
    return b;
}
console.log(a(2) + a(4));

// Resultado es 6 ya que el valor que toma en cuenta la funcion son los valores de a, no retorna b porque no
// hay nada.

// EJERCICIO 4

function a(b) {
    console.log(b);
    return b * 3;
}
console.log(a(3));

// Los valores de consola son 3 y 9, ya que primero no solicite imprimir el valor de b que al reemplazar el
// () seria 3 y luego no solicita que se ejecute el return que es una multiplicación de b que vale 3 por 3 
// que se aplica en la formula.

// EJERCICIO 5

function a(b) {
    return b * 4;
    console.log(b);
}
console.log(a(10));

// El valor de b seria 10 según la función mostrada al reemplazar el () por un valor. Luego la consola
// retornara el valor de la multiplicación que sería 10*4. Resultado: 40.

// EJERCICIO 6

function a(b) {
    if (b < 10) {
        return 2;
    }
    else {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// El valor de b es 15. como no cumple la funcion if que sea menor que 10 retorna el valor 4 

// EJERCICIO 7

function a(b, c) {
    return b * c;
}
console.log(10, 3);
console.log(a(3, 10));

// La primera salida de consola seria 10 y 3 por los valores entregados en el (). Luego ocupa la funcion
// con los datos correspondientes a la varible a, b valdría 3 y c vale 10, los cuales se multiplican para
// que retornen el valor solicitado que sería 30.

// Ejercicio 8

function a(b) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// Los valores ha reemplazar en b serían 3 y 4 para utilizarlos en la funcion, a través del for se consulta
// el valor de i que en el primer caso sería 3 pasa por la variable i y por consola sale ese valor. Lo mismo
// pasaría con el valor de 4. Por lo tanto, en la salida de consola aparece 3 y 4.

// Ejercicio 9 

function a() {
    for (var i = 0; i < 10; i++) {
        i = i + 2;
        console.log(i);
    }
}
a();

// El primer valor de i seria 0, al aplicar la formula i+2, es valor pasaría a ser 2 imprimiendose en consola
// Luego comparo ese valor con la condicion menor a 10 la cual se cumple, pero i debo incrementarla en 1 por lo 
// cual es valor pasa a ser 3 y luego aplico la formula nuevamente y el valor que saldría sería 5. Nuevamente
// ingreso este ultimo valor a ver si cumple la condicion, y si la cumple, volviendo a incrementar i en 1, pasando
// este valor a 6 para luego aplicar la formula y mostrar el valor en la consola que resultaría 8. Este valor
// vuelve a ingresar, se vuelve a cumplir la condicion y se incrementa en 1, pasando este valor a 9. Aplico
// otra vez la formula y el resultado por consola sería 11. Finalmente vuelvo a comprobar la condicion de i
// y esta ya no se cumple, por lo cual la función finaliza aca.

// Ejercicio 10

function a(b, c) {
    for (var i = b; i < c; i++) {
        console.log(i);
    }
    return b * c;
}
a(0, 10);
console.log(a(0, 10));

// Segun la condicion i es igual a b, por lo tanto, b parte en 0 y si i es menor que c, c valdría 10.
// Luego el primer valor que se imprimira sería 0 en la consola. Al aplicar el for se va comprobando que el
// valor de i se va incrementando hasta cumplir la condicion por lo cual los valores que saldrían por consola 
// serian: 0,1,2,3,4,5,6,7,8 y 9. Estos valor se volverían a repetir ya que se nos pide otro console.log desde
// el 0 hasta el 10 (este valor no cumple la condicion), por lo cual nos vuelve a dar los valores desde el 0 al
// 9. Se ejecuta el return que seria 10*0, por lo cual es ultimo valor en nuestro listado es 0  
// Por lo tanto nuestro resultado final sería 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9 y 0.

// Ejercicio 11

function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
}


// En este caso tenemos dos variables i y j. Ambas parten en 0. Al estar en el primer for el valor de i debe ser 0
// pero sin embargo, este valor se pierde ya que debo entra al for de j cuyo valor tambien es 0, pero la consola 
// solicita que imprimamos el valor de de i al final que en este caso ya no existe por lo cual queda vacio el valor a 
// imprimir en consola y aunque lo realicemos cumpliendo las condiciones de i<10 y j<10, nuestra consola anulara
// los valores de i por lo cual el resultado en nuestra consola estara vacia finalmente.

// Ejercicio 12

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// Nuestros valor de i y j parten en 0, sin embargo, no existe condicion para que sea ejetado por lo cual su resultado
// es vacio.

// Ejercicio 13

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// El valor de z es 10 lo ingreso a la funcion y el valor de z no es igual a 15 por lo cual la consola imprime
// el valor original que seria 10.

// Ejercicio 14

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// Primero se invoca a() por lo cual el valor que sale por consola es 15 que corresponde al valor de z dentro 
// de la funcion y luego se imprime el valor 10 que es la variable de z.


// Ejercicio 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

// El valor de z es 15 por lo cual al realizar la ejecucion de z=a() el primer valor de la consola sería 15.
// Luego ingreso a la funcion y comparo z es igual a 15, lo cual es verdad, por lo cual de vuelve a imprimir 
// el numero 15. 

