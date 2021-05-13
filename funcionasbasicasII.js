// Ejercicio 1

function ejercicio1(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big";
        }
    }
    return array;
}

console.log(ejercicio1([-1, 3, 5, -5]));

// Ejercicio 2

function ejercicio2(array) {
    var max = array[0];
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        else if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(min);
    return max;
}

console.log(ejercicio2([6, 8, 2, 6, 0, 3]))

// Ejercicio 3

function ejercicio3(array) {
    console.log("penultimo valor = ", array[array.length - 2]);
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return array[i];
        }
    }
}

console.log(ejercicio3([6, 5, 1, 7, 8, 2, 0]))

// Ejercicio 4

function ejercicio4(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var doble = array[i] * 2;
        newArray.push(doble)
    }
    return newArray;
}

console.log(ejercicio4([1, 4, 5]));

// Ejercicio 5

function ejercicio5(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    array[array.length - 1] = count;
    return array;
}

console.log(ejercicio5([-1, 1, 1, 1]));

// Ejercicio 6

function ejercicio6(array) {
    for (var i = 0; i < array.length - 2; i++) {
        if (array[i] % 2 !== 0 && array[i + 1] % 2 !== 0 && array[i + 2] % 2 !== 0) {
            if (i + 1 < array.length && i + 2 < array.length) {
                console.log("¡Qué imparcial!", array[i]);
            }
        }
        else
            if (array[i] % 2 === 0 && array[i + 1] % 2 === 0 && array[i + 2] % 2 === 0) {
                console.log("¡Es para bien!", array[i]);
            }
    }
}

ejercicio6([1, 1, 1, 2, 2, 2, 3, 3, 3]);
ejercicio6([2, 4, 2, 1, 5, 1, 3, 7, 9]);

// Ejercicio 7

function ejercicio7(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i]++;
        }
        console.log(array[i]);
    }
    return array;
}

console.log(ejercicio7([1, 2, 3, 4, 5, 6, 7]));

// Ejercicio 8

function ejercicio8(array) {
    for (var i = array.length - 1; i > 0; i--) {
        array[i] = array[i - 1].length;
    }
    return array;
}

console.log(ejercicio8(["programar", "dojo", "genial"]));

// Ejercicio 9

function ejercicio9(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i] + 7);
    }
    console.log(newArray);
    return newArray;
}

ejercicio9([2, 3, 4])

// Ejercicio 10

function ejercicio10(array) {

    for (var i = 0; i < array.length / 2; i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    console.log(array);
    return array;
}

ejercicio10([2, 4, 6, 8, 10, 12]);

// Ejercicio 11

function ejercicio11(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] * -1;
        }
    }

    return array;
}

console.log(ejercicio11([8, -7, 6, 3]));

// Ejercicio 12

function ejercicio12(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "comida") {
            console.log("yummy");
            count++;
        }
    }
    if (count === 0) {
        console.log("tengo hambre");
    }
}

ejercicio12([2, 6, "comida", 8, 9, "comida"]);
ejercicio12([5, 6, 7, 8, 9]);

// Ejercicio 13

function ejercicio13(array) {

    for (var i = 0; i < array.length / 2; i++) {
        if (i % 2 === 0) {
            var temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }
    }

    console.log(array);
}

ejercicio13([true, 42, "Ada", 2, "pizza"]);
ejercicio13([1, 2, 3, 4, 5, 6]);

// Ejercicio 14

function ejercicio14(array,num){
    for(var i=0; i<array.length;i++){
        array[i]*=num;
    }
    console.log(array);
    return array;
}

ejercicio14([1,2,3], 3);
