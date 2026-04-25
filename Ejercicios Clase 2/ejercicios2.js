// let num = Number(prompt("Ingrese un numero"));

//EJ 1
    // if (isNaN(num)){
    //     alert("ingrese un numero valido")
    // }else{
    //     if (num >= 1){
    //         alert("El numero es positivo")
    //     }else if( num <= 1){
    //         alert("El numero es negativo")
    //     }else if (num == 0){
    //         alert("El numero es 0")
    //     }
    // }

//EJ2
    // if (isNaN(num)){
    //     alert("ingrese un numero valido")
    // }else{
    //     if (num % 2 === 0 ){
    //         alert("EL numero es par")
    //     }else
    //         alert("El numero es impar")
    // }

//EJ3
// let edad = Number(prompt("Ingrese su edad"));

    //  if (isNaN(edad)){
    //     alert("Ingrese una edad validad")
    //  }else{
    //     if (edad >= 18 ){
    //         alert("usted es mayor de edad")
    //     }else
    //         alert("usted es menor de edad")
    //  }

//EJ4
for(let i=1; i<=10; i++){
    console.log('numeros del :',i,'con for');
}

//EJ5
let j = 1;

while(j <= 10){
    console.log("Los numeros del :", j, 'con while');
    ++j
}

//EJ6
const tb = 2;
for(let num2=1; num2<=10; num2++){
    console.log(num2*tb)
}

//EJ7
for(let sumar=1; sumar<=100; sumar++){
    console.log("Los numeros del:", sumar)
}

//EJ8

function numeromayor (n1, n2){
    if(isNaN(n1, n2)){
        console.log("ingrese un valor numerico valido");
    }else{
        if ( n1 > n2){
            console.log("El numero mayor es el primer numero", n1)
        }else if ( n2 > n1){
            console.log("El numero mayor es el segundo numero", n2)
        }else
            console.log ("Ninguno de los numeros es el mayor")
    }
}
numeromayor(1,2)

//EJ9
function contarpalabras (contar = ''){
    if (typeof contar !== 'string') return 'El valor ingresado no es una texto';
    if (contar === '') return 'Ingrese un valor por favor';
    return contar.length;
}
console.log(contarpalabras('Hola'));

//EJ10  
function contarvocales (cadena){
    const vocales = "aeiouAEIOU";
    let  contador = 0
    for (let i=0; i < cadena.length; i++){
        if(vocales.includes(cadena[i])){
            contador++;
        }
    }
    return contador;
}
console.log(contarvocales("Hola bro"))

//EJ11
let var1 = 1;
let var2 = 20;
let i =var1;

for(i>=var1; i<=var2; i++){
    if(i%2==0){
        console.log(i);
    }
}

//EJ12
function factorialnumero(n){
    let resultado = 1;

    for(let i = 1; i <= n; i++){
        resultado *= i;
    }

    return resultado;
}

console.log(factorialnumero(5));

//EJ13
function imprimirCaracteres(frase){
    for(let i = 0; i < frase.length; i++){
        console.log(frase[i]);
    }
}

imprimirCaracteres("Hola Jovenes");

//EJ14
const texto = "Hola bro";
let invertir = 0;
let textoinverso = "";
for(let letra of texto){
    invertir++;
}

for(let i = invertir -1; i >= 0; i--){
    textoinverso += texto[i];
}
console.log(textoinverso);

//EJ15
function palindromo(texto){
    return texto.split('').reverse().join('') == texto;
}

console.log(palindromo('lateleletal'));

//EJ16
const tb1 = 2;
for(let num3=1; num3<=25; num3++){
    console.log(num3*tb1)
}

//EJ17
function saberSiEsPrimo(num){
    if (num < 2) {
        console.log("Escriba un número mayor o igual a 2");
        return false;
    }else{
        for (let i = 2; i < num; i++){
            if (num % i == 0){
                return false
            }
        }
        return true
    }
}

console.log(saberSiEsPrimo(7));

//EJ18
for(let i=1; i<=6; ++i){
    let resultado = '';

    for(let j=1; j<=i; ++j){
        resultado += '* ';
    }
    console.log(resultado);
} 


//EJ20

let usuario = "Jose";
let contraseña = 123;
 
if (usuario === "Jose") {
    if (contraseña === 123) {
        console.log("Bienvenido");
    } else {
        console.log("Contraseña incorrecta");
    }
} else {
    console.log("Usuario incorrecto");
}