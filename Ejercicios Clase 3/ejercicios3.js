const objeto = {
    nombre: "Carlos",
    edad: 22,
    curso: "Programacion"
}

let {nombre, edad, curso} = objeto
console.log(nombre)
console.log(edad)
console.log(curso)


//EJ2
const estudiantes = [
    { nombre: "Carlos", edad: 20, curso: "progra", notas: [90, 85, 88] },
    { nombre: "Jose", edad: 22, curso: "ingles", notas: [70, 75, 80] },
    { nombre: "Sergio", edad: 19, curso: "progra", notas: [95, 92, 96] },
    { nombre: "Luis", edad: 21, curso: "ingles", notas: [60, 65, 70] },
    { nombre: "Miguel", edad: 23, curso: "progra", notas: [85, 87, 90] }
]

let contador = 0;
for(let estudiante of estudiantes){
    contador++
    console.log(contador, estudiante.nombre, estudiante.notas)
}

//EJ3
let contador2 = 0
for(let estudiante of estudiantes){
    contador2++;

    let suma = 0;
    for (let nota of estudiante.notas){
        suma += nota
    }

    let promedio = suma / estudiante.notas.length;
    console.log(contador2, estudiante.nombre, promedio);
}

//EJ4
const listaestudiantes = estudiantes;
listaestudiantes.sort((a,b) => {
    return a.edad - b.edad
}); 
console.log(listaestudiantes)
