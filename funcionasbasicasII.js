function ejercicio1() {
    var array = [];
    for (var i = 1; i < 256; i++) {
        array.push(i);
    }
    return array;
}
console.log(ejercicio1());

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


    var array =[2,4,6,7,9];
    let sum = 0;
    for (let i=0; i < array.length; i++){
        sum += array[i]
    }
    console.log(sum)
