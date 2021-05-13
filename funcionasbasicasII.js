// Ejercicio 1

function ejercicio1() {
    var array = [];
    for (var i = 1; i < 256; i++) {
        array.push(i);
    }
    return array;
}
console.log(ejercicio1());

// Ejercicio 2

function ejercicio2(x) {
    var suma = 0
    for (var i = 1; i <= x; i++) {
        if (i % 2 == 0) {
            suma += i
        }
    }
    return suma
}

console.log(ejercicio2(1000));

// Ejercicio 3

function ejercicio3(x) {
    var suma = 0
    for (var i = 1; i <= x; i++) {
        if (i % 2 == 1) {
            suma += i
        }
    }
    return suma
}

console.log(ejercicio3(5000));

// Ejercicio 4

function ejercicio4(array){
    var suma=0;
    for(var i=0;i<array.length;i++){
        suma+=array[i];
    }
    return suma;
}

console.log(ejercicio4([2,3,7]));
console.log(ejercicio4([-7,1,-6,15]));

// Ejercicio 5

function ejercicio5(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(ejercicio5([-8, 6, 2, 5]));

// Ejercicio 6

function ejercicio6(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}

console.log(ejercicio6([2, 4, 6, 8, 18]));

// Ejercicio 7

function ejercicio7(){
    var newArray=[];
    for( var i=1;i<=50;i++){
        if(i%2!==0){
            newArray.push(i);
        }
    }
    return newArray;
}

console.log(ejercicio7());

// Ejercicio 8

function ejercicio8(array,y){
    var count=0;
    for(var i=0;i<array.length;i++){
        if(array[i] > y){
            count++;
        }
    }
    return 2;
}

console.log(ejercicio8([1, 3, 5, 7]));

// Ejercicio 9

function ejercicio9(array){
    for(var i=0;i<array.length;i++){
        array[i] = array[i]*array[i];
    }
    return array;
}

console.log(ejercicio9([2,4,12,-5]));

// Ejercicio 10

function ejercicio10(array){
    for(var i=0;i<array.length;i++){
        if(array[i] < 0){
            array[i]= 0;
        }
    }
    return array;
}

console.log(ejercicio10([-8,-5,4,-2,1]));







