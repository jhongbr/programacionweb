/* const nombre = "Pedrito";

nombre = "Jhon"
console.log(nombre);*/

/*function contraValida(input){
    return input == "2F" || input == "3F"

}

console.log(contraValida("3F"))*/

//Funcion declarativa
// function nombreDeLaMisma (no importa el tipo de dato)
function calcular_impuesto(edad, ingresos){
    return edad ==1 >=18 || ingresos ==0 >=1000 *0.4
}
console.log(calcular_impuesto())

/*ejercicio para nota*/


//Funcion anonima
//no tiene nombre, siempre se va a incrustar en una variable
let contraValida2 = function (input){
    return input == "2F" || input == '3F'
}

console.log("contaValida2", contraValida2("2F"));

//Funtion flecha - arrow function

let contra = (input)=>{
    return input == "2F" || input == "3F"
}

console.log("contra", contra("FF"));

let validaMujeres = (mujer) => {
    const mujeres = ['Danna', 'Darly', 'Salome'];
    return mujeres.find(muj => muj = mujer);
    //return mujere.find
    //return mujeres.find(muj => muj = mujer);

}

console.log(validaMujeres("Danna"))

//el triple = significa que todo debe estar igual

let splitFun = (nombres)=>{
    const nombre = nombres.split("-")[0];
    const apellido = nombres.split("-")[1];
    const edad = nombres.split("-")[2];

    console.log(
        `Mi nombre es: ${nombre} ${apellido} y tengo ${edad}` 
    )
}

splitFun("amilkar-hernandez-23")

const array = [{
    name : 'Danna',
    lastname : 'Flor',
    age : 23
},
{
    name : 'Daniel',
    lastname : 'Rubio',
    age : 19
}]

let functionObject = (arrayObjects)=>{
    //arrayObjects.forEach((obj) =>console.log(obj.name))
    //arrayObjects.map((obj) =>console.log(obj.name))
    //arrayObjects.forEach((obj) =>console.log(`Nombre:${obj.name}`))
    arrayObjects.forEach((obj) =>{
        obj.name == 'Danna' ? obj.name = 'Farid' : null; //para cambiar nombre o cosas diferentes, tambien es un if terniario
        console.log(`Nombre:${obj.name}`)})

}

functionObject(array)