let tarjetasDestapadas = 0;
let imagenUno = null;
let imagenDos = null;
let primerResultado = null;
let SegundoResultado = null;

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

numeros = numeros.sort(() =>{return Math.random() -0.5});
console.log(numeros);

function destapar(id){
tarjetasDestapadas++;

 if(tarjetasDestapadas == 1){
    imagenUno = document.getElementById(id);
    primerResultado = numeros[id];
    imagenUno =innerHTML = primerResultado;

    imagenUno.disabled = true;
 }else if(tarjetasDestapadas == 2){
    imagenDos = document.getElementById(id);
    primerResultado = numeros[id];
    imagenDos =innerHTML = primerResultado;

    imagenDos.disabled = true;
 }
 }

