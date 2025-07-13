//Ejercicio 5 Red social
arrayUsuarios = [
    {
        'nombre': "Andrea",
        'edad': "28",
    },
    {
        'nombre': "David",
        'edad': "28",
    },
    {
        'nombre': "Celes",
        'edad': "10",
    }
]

function filtrarUsuarios(usuarios,edadMinima){
    newLista = []
    for(i = 0; i < usuarios.length; i++){
        if (usuarios[i].edad >= edadMinima){
            newLista.push(usuarios[i].nombre)
        }   
    }
    return newLista
}

console.log(filtrarUsuarios(arrayUsuarios,18));
