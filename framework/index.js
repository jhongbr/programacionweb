/* const nombre = "Pedrito";

nombre = "Jhon"
console.log(nombre);*/

/*function contraValida(input){
    return input == "2F" || input == "3F"

}

console.log(contraValida("3F"))*/

//Funcion declarativa
function calcular_impuesto(edad, ingresos){
    return edad ==1 >=18 || ingresos ==0 >=1000 *0.4
}

console.log(calcular_impuesto())

/*ejercicio para nota*/


//Funcion anonima

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