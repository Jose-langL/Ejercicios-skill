let nombre = "Jose Luis"
let apellido = "Tot"
let edad = 18
let ciudad = "Guatemala"

//EJ1
console.log('Hola, mi nombre es', nombre, 'tengo', edad, 'años y vivo en', ciudad)

//EJ2-EJ3
let n1 = 10
let n2 = 20

let suma = n1 + n2
let resta = n1 - n2 
let multiplicacion = n1 * n2
let division = n1 / n2
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

//EJ4
let nota1 = 80
let nota2 = 40
let nota3 = 39

let promedio = (nota1 + nota2 + nota3) / 3
console.log(promedio)

//EJ5
console.log('tu edad en meses es', 12*edad)

//EJ6
let hora = 2
let minutos = 60
let segundos = 60

console.log ('Las horas son', hora, 'Los minutos son', hora*minutos, 'Los segundos son', hora*minutos*segundos)

//EJ7
let producto = 120
let iva = 0.19

console.log('El precio es de $',producto, 'El iva es de $', producto*iva)

//EJ8
let base = 10
let altura = 5

let area = (base * altura) / 2

console.log('El area del rectangulos es de', area)

//EJ9
let perimetro = ( base + altura + base)
console.log('El perimetro del rectangulo es de', perimetro)

//EJ10
console.log('Union de nombre y apellido', nombre, apellido)

//EJ11
let palabra = "Hola como estas bro?"
console.log(palabra.length)

//EJ12
console.log('Primera palabra', palabra.slice(0,1), 'La ultima palabra', palabra.slice(-1))

//EJ13
console.log('Palabra en mayuscula ', palabra.toUpperCase())
console.log('Palabra en minuscula', palabra.toLowerCase())

//EJ14
console.log('Extraccion de una palabra', palabra.slice(8,9))

//EJ15
console.log('Reemplazar una palabra', palabra.replace ("Hola", "Nose"))

//EJ16
let incremento = 10
incremento++

console.log(incremento)
console.log(++incremento)
console.log(++incremento)

//EJ17
let num3 = 5
console.log(num3 += 3)
console.log(num3 -= 4)
console.log(num3 *= 2)
console.log(num3 /= 5)

//EJ18
console.log("tengo", edad, "años")

//EJ19
console.log (nota1 % nota2)

//EJ20
let hobby = "Dormir"
let comida = "Pizza"

console.log('Hola me llamo', nombre, 'tengo', edad, 'añoss', 'mi hobby es', hobby, ' y mi comida favorita es', comida)