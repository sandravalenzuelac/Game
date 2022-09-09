//Uso del localStorage
class usuario {
    constructor(nombre) {
        this.nombre = nombre
    }
}

let usuarios = []

if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
} else {
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

//Funcion para guardar los nombres en el localStorage
function form(){

const formulario = document.querySelector('form')

formulario.addEventListener("submit", (e) => {

    const datForm = new FormData(e.target)

    const usuarioObj = new usuario(datForm.get("nombre"))

    usuarios.push(usuarioObj)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
})
}


//Mostrando API de los simpsons en el HTML
fetch("https://thesimpsonsquoteapi.glitch.me/quotes")

.then(response => response.json())
.then(data =>{
    const {image, quote} = data[0]
    const divImg = document.getElementById("imgSimpson")
    divImg.innerHTML =`
     <div>
         <p>${quote}</p>
         <img class"imgSimp" src="${image}"></img>

     <div>
    `
})

//Inicializando las variables
let tarjetasDestapadas = 0;
let imagenUno = null;
let imagenDos = null;
let primerResultado = null;
let segundoResultado = null;
let aciertos = 0;

const mostrarAciertos = document.getElementById("aciertos");

//Numeros aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => {
    return Math.random() - 0.5
});
console.log(numeros);

//Funcion principal, para destapar las img
function destapar(id) {

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if (tarjetasDestapadas == 1) {

    //Muestra la primera imagen
        imagenUno = document.getElementById(id);

        primerResultado = numeros[id];
        imagenUno.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;

        //Deshabilita el primer boton
        imagenUno.disabled = true;
    } else if (tarjetasDestapadas == 2) {

   //Muestra la segunda imagen
        imagenDos = document.getElementById(id);
        segundoResultado = numeros[id];
        imagenDos.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;

        //Deshabilita el segundo boton   
        imagenDos.disabled = true;

        if (primerResultado == segundoResultado) {
            Toastify({
                text: "Excelente!",
                className: "info",
                style: {
                    background: "pink",
                }
            }).showToast();

            //Contador tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumenta los aciertos
            aciertos++;

            //mostrando los aciertos en el HTMl
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
             if (aciertos == 8) {

                const usuarioStorage = JSON.parse(localStorage.getItem("usuarios"))
                usuarioStorage.forEach((usuarios)=>{

                mostrarAciertos.innerHTML = ` ${aciertos} Ganaste! ${usuarios}`
                 
                Toastify({
                    text: "Presiona aqui si quieres volver a jugar",
                    duration: 10000,
                    destination: "index.html",
                    newWindow: true,
                    close: true,
                    gravity: "button", 
                    position: "center", 
                    stopOnFocus: true, 
                    style: {
                      background: "pink",
                      text:"center",
                    },
                    onClick: function(){}
                  }).showToast();
                })
                }
            } else {
             //Muestra temporalmente los resultados y sino son iguales las imagenes, las vuelve a tapar
            setTimeout(() => {
                imagenUno.innerHTML = ' ';
                imagenDos.innerHTML = ' ';
                imagenUno.disabled = false;
                imagenDos.disabled = false;
                tarjetasDestapadas = 0;
            }, 1000);
        }
    }

}

