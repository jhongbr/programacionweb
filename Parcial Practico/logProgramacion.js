
function sumarCuadro (arrayNumeros) {
    let contador = 0
    for (let i = 0; i < arrayNumeros.length; i++) {
        contador += arrayNumeros[i];
        console.log(arrayNumeros[i])
    }
    return contador;
}

const arrayNumeros = [1,23,453,3267,12354, 123456];
console.log(sumarCuadro(arrayNumeros));
