//Ejercicio 3
const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 }
];

function buscarProducto(nombre,inventario){
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre == nombre) {
            return inventario[i];
        }
        else{
            return null;
        }
    }
}

producto = buscarProducto("Camisa", inventario);
console.log(producto);