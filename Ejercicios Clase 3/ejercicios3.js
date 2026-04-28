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
    { nombre: "Carlos", edad: 20, curso: "progra", notas: [9, 8, 8] },
    { nombre: "Jose", edad: 22, curso: "ingles", notas: [7, 7, 8] },
    { nombre: "Sergio", edad: 19, curso: "progra", notas: [1, 2, 4] },
    { nombre: "Luis", edad: 21, curso: "ingles", notas: [0, 1, 4] },
    { nombre: "Miguel", edad: 23, curso: "progra", notas: [3, 4, 0] }
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


//EJ5
let contador3 = 0;

for (let estudiante of estudiantes) {
    let suma = 0;

    for (let nota of estudiante.notas) {
        suma += nota;
    }

    let promedio = suma / estudiante.notas.length;

    if (promedio > 3) {
        contador3++;
        console.log(contador3, estudiante.nombre, promedio);
    }
}

//EJ6
for(let {nombre, edad} of estudiantes){
    console.log("Nombre:", nombre)
    console.log("Edad", edad)
}

//EJ7
const Materias = ["Computacion", "Programacion", "CienciasSociales", "Literatura", "Ingles", "Computacion", "Programacion",]
let SetMaterias = new Set (Materias);
console.log(SetMaterias)

//EJ8
const Numeros = [1, 2, 3, 1, 4, 5, 2];
let SetNummeros = new Set (Numeros);
console.log(SetNummeros)

//EJ9
const productos = new Map ();

productos.set ("Huevos", 2);
productos.set ("Aceite", 20);
productos.set ("Café", 20);

console.log(productos)

//EJ10
let suma2 = 0;
for(let [llave, valor] of productos){
    suma2 += valor;
    console.log("El total de los productos es", suma2);
}

//EJ11
console.log(productos.has("Huevos"))

//EJ12
const CuentaBancaria = {
    nombre: "Jose Luis",
    estado: "Activo",
    dinero: 1200,
    banco: "G&T"
}

CuentaBancaria["dinero"] += 100;

console.log(CuentaBancaria)

//EJ13
const productos2 = [
    { nombre: "Leche", precio: 10, categoria: "Lácteos" },
    { nombre: "Pastel", precio: 30, categoria: "Panadería"},
    { nombre: "Yogur", precio: 8, categoria: "Lácteos" },
    { nombre: "Pan", precio: 5, categoria: "Panadería" }
];

for (let producto2 of productos2){
    if (producto2.categoria === "Lácteos"){
        console.log(producto2.nombre, producto2.precio);
    }
}

// EJ14
productos.sort((a, b) => a.precio - b.precio);
console.log(productos);


// Ej15
const persona = {
    nombre: "Jose Luis",
    direccion: {
        ciudad: "Guatemala",
        zona: 1
    }
};

const { nombre, direccion: { ciudad, zona } } = persona;

console.log(nombre);
console.log(ciudad);
console.log(zona);


// EJ16
const nombres = ["Jose", "Ana", "Luis", "Jose", "Ana"];

const nombresUnicos = new Set(nombres);

console.log("Cantidad de nombres únicos:", nombresUnicos.size);


// EJ17
const productosMap = new Map();

for (let producto of productos) {
    productosMap.set(producto.nombre, producto.precio);
}

console.log(productosMap);


// EJ18
const numeros = new Set([1, 2, 3, 4, 5]);

numeros.delete(3);

console.log(numeros);


// EJ19
for (let [clave, valor] of productosMap) {
    console.log(clave, valor);
}


// EJ20
const libros = [
    { titulo: "Harry Potter", autor: "J.K Rowling", estado: "Disponible" },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", estado: "Prestado" },
    { titulo: "1984", autor: "George Orwell", estado: "Disponible" }
];

for (let libro of libros) {
    if (libro.estado === "Disponible") {
        console.log(libro.titulo, libro.autor);
    }
}