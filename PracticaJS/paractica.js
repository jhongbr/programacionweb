//EJERCIOS PARA QUIZ JAVASCRIPT FUNCION FLECHA

/*ejercicio #1
Escribir una función llamada contrasenaValida que 
reciba un string y retorne true si el string es igual a 
"2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe 
retornar false.*/

let contrasenaValida = (String)=>{
    if (String == "2Fj(jjbFsuj" || String == "eoZiugBf&g9")
    return contrasenaValida = true;
    else
    return contrasenaValida = false;
}

/*console.log(contrasenaValida("2Fj(jjbFsuj"))*/ // true
console.log(contrasenaValida("hola")) // false
 
let contraVali = (string)=>{
    return string == "2Fj(jjbFsuj" || string == "eoZiugBf&g9"
}
console.log(contraVali ("2Fj(jjbFsuj"))

/*ejercicio #2
Escribir una función llamada calcularImpuestos que 
reciba dos argumentos numéricos: edad e ingresos. 
Si edad es igual o mayor a 18 y los ingresos son iguales
o mayores a 1000 debe retornar ingresos * 40%. 
De lo contrario retornar 0.*/

let calcularImpuestos = (edad,ingreso)=>{
    return (edad >= 18 && ingreso >= 1000) ? ingreso *0.4: 0;   
}

console.log(calcularImpuestos(18, 1000));

let calcularImpuestos1 = (edad,ingreso) =>{
    if (edad >=18 && ingreso >=1000)
    return ingreso * 0.4
    else
    return 0
}

console.log(calcularImpuestos(19,900)) // 0

/*ejercicio #3
El índice de masa corporal (IMC), o BMI por sus siglas 
en inglés, es un valor que determina la cantidad de 
grasa de una persona.

El BMI se calcula con la siguiente formula: 
peso / altura^2

Escribir una función llamada bmi que reciba dos 
argumentos: peso y altura, y retorne un string con las
siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

let bmi = (peso,altura) =>{
    let bmi = peso / (altura^2)

    if(bmi <18.5){
    return "Bajo de peso"}
    else if (bmi >= 18.5 && bmi <= 24.9){
    return "Normal"}
    else if (bmi >= 25 && bmi <= 29.9){
    return "Sobrepeso"}
    else {
    return "Obeso"}
}

console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"

/*ejercicio #4
Escribir una función llamada imprimirArreglo que reciba
un arreglo e imprima cada elemento en una línea a parte:*/

function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      console.log(arreglo[i]);
    }
  }
  
  let myArray = ["1", "hola", "mundo","mujer"];
  console.log(imprimirArreglo(myArray));

/*ejercicio #5
Escribe una función llamada likes que reciba un número y retorne un string 
utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver 
el mismo número como un string.*/

const likes = (numero)=>{
    if (numero < 1000){
        return numero.toString()
    }else if (numero < 1000000){
        const miles = Math.floor(numero/ 1000)
        return `${miles}K`
    }else {
        const millones = (numero / 1000000).toFixed(1);
        return `${millones}M`
    }      
}

console.log(likes(745342454));

/*ejercicio #10
Escribir una función llamada numeroDeCaracteres que reciba un string y 
un caracter (un string de un caracter). La función debe retornar el número 
de veces que aparece el caracter en el string.*/

let numeroDeCaracteres = (string,caracter) =>{
    let contador = 0
    for (let i = 0; i <= string.length-caracter.length; i++){
        if(string.substring(i, i + caracter.length) ==caracter){
            contador++;}
    }
    return contador
}
console.log(numeroDeCaracteres("eeee", "e"))
console.log(numeroDeCaracteres("jhstesro", "s"))

/*ejercicio #11
Escribir una función llamada sumarArreglo que reciba un 
arreglo de números y retorne la suma de todos los elementos.*/

let sumarArreglo = (numero) =>{
    let contador = 0
    for(let i=0; i < numero.length; i++){
        contador += numero[i]
    }
    return contador;
}
console.log(sumarArreglo([2,3,4]))

/*ejercio #15
Escribir una función llamada transcribir que reciba un string 
(una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U*/

let transcribir =(string) =>{
    let newString ="";
    for (let i=0; i < string.length; i++){
        switch(string[i]){  
            case "G":   
            newString += "C"
            break;  
            case "C":   
            newString += "G"
            break;
            case "T": 
            newString += "A" 
            break;
            case "A": 
            newString += "U" 
            break;
            default : 
            newString += string [i] 
        }
    }
        return newString
                  }
console.log(transcribir("ACGT"))
console.log(transcribir("ACGTGGTCTTAA"))

/*ejercicio #12
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne 
la multiplicación de todos los elementos.*/

let multiplicarArreglo = (numeros) =>{
    let contador = 1
    for (i = 0; i < numeros.length; i++){
        contador *= numeros[i]
    }
    return contador
}
console.log(multiplicarArreglo([4, 1, 2, 3]))

