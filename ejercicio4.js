//Ejercicio 4 
let prompt = require("prompt-sync")();
let numeroComas = prompt("Ingrese numero separado por comas: ");
let numerosArr = numeroComas.split(",").map(Number);
console.log(numerosArr);

function calcularPromedio(array) {
    let suma = 0
    for(i = 0; i < array.length; i++){
        suma = suma + array[i]
        console.log(array[i]);
        
    }
    let promedio = suma / array.length
    return promedio
}

console.log(calcularPromedio(numerosArr))