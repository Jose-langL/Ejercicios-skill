let nombre = "Jose Luis"

function saludo (nombre,callback){
    console.log("Bienvenido " + nombre);
    setTimeout(function(){
        callback();
    }, 2000);

    setTimeout(function() {
        console.log("Hasta pronto " + nombre)
    }, 4000);

    setTimeout(function() {
        console.log("Sera un gusto volver a verte de nuevo " + nombre)
    }, 3000);
}

saludo(nombre, function(){
    console.log("Adios " + nombre);
});

function simulardescarga (callback){
    console.log("empezando descarga")
    setTimeout(function(){
        callback();
    }, 3000)
}

simulardescarga(function(){
    console.log("Descarga finalizada")
});


//EJ4
let Frutas = ["Manzana", "Pera", "Melocoton", "Sandia"]

Frutas.forEach(function(fruta){
    setTimeout(function(){
        console.log(fruta);
    }, 4000)    
});

let Numeros = [1,2,3,4,5,6,7,8,9,10]

Numeros.filter(function(NumeroPares){
    setTimeout(function(){
        if(NumeroPares % 2 == 0){
        console.log("Los numeros pares son", NumeroPares)
    }
    },3000)
    
})

//EJ6
let numeros = [1, 2, 3, 4, 5];

setTimeout(function() {
    let duplicados = numeros.map(function(numero) {
        return numero * 2;
    });

    console.log(duplicados);
}, 2000);

//EJ7
let numeros = [10, 20, 30, 40, 50];


setTimeout(function() {
    let suma = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);

    console.log("La suma total es:", suma);
}, 2000);

