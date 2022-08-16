let tarjetasDestapadas = 0;
let imagenUno = null;
let imagenDos = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;

const mostrarAciertos = document.getElementById("aciertos");

//Numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(() =>{return Math.random() -0.5});
console.log(numeros);

function destapar(id){
tarjetasDestapadas++;
console.log(tarjetasDestapadas);

 if(tarjetasDestapadas == 1){

    imagenUno = document.getElementById(id);
    primerResultado = numeros[id];
    imagenUno.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;

    imagenUno.disabled = true;
 }else if(tarjetasDestapadas == 2){

    imagenDos = document.getElementById(id);
    segundoResultado = numeros[id];
    imagenDos.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;;

    imagenDos.disabled = true;

if(primerResultado == segundoResultado){
 tarjetasDestapadas = 0;

aciertos++;
mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
}else{
    setTimeout(()=>{    
    imagenUno.innerHTML = ' ';
    imagenDos.innerHTML = ' ';
    imagenUno.disabled = false;
    imagenDos.disabled = false;
    tarjetasDestapadas = 0;
},2000);

}
 }
 }
