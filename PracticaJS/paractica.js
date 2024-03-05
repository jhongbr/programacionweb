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
un arreglo e imprima cada elemento en una línea a parte:
*/

let imprimirArreglo = (cosa) =>{
    const cosas = [1, "Hola", 2, "Mundo"];
    for (cosas )
}

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))