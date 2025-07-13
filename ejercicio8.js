//Ejercicio 8 cambio de moneda
let prompt = require("prompt-sync")();
let monto = ("Escriba el monto que quiera convertir: ")
let moneda = ("Escriba USD si quiere convertir a dolares, y EUR si quiere convertir a euros")
function convertirMoneda(monto,monedaDestino){
    if (monedaDestino == "USD"){
       let conversion =  monto / 3999;
       return conversion
    } else if (monedaDestino == "EUR") {
        let conversion =  monto / 3999;
       return conversion
    } else ("Comando equivocado ")
}

console.log(convertirMoneda(300000,"USD"));
