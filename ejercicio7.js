//Ejercicio 7 app bancaria
let prompt = require("prompt-sync")();
  let  saldo = prompt("Cual es tu saldo actual: ");
   let monto = prompt("Cuanto es el monto a retira: ")
function retirarDinero(saldo,monto){
    if (saldo < monto){
        console.log("Fondos insufiencientes");
    } else{
        
       let nuevosaldo = saldo - monto;
        console.log(nuevosaldo)
    }

}
retirarDinero(saldo,monto)