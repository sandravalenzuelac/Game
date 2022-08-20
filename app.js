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

const formulario = document.querySelector('form')
const input = document.querySelector('input')
const botonConfirmacion = document.querySelector('button')


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)

    const usuarioObj = new usuario(datForm.get("nombre"))

    usuarios.push(usuarioObj)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
})
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

function destapar(id) {

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if (tarjetasDestapadas == 1) {

        imagenUno = document.getElementById(id);

        primerResultado = numeros[id];
        imagenUno.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;

        imagenUno.disabled = true;
    } else if (tarjetasDestapadas == 2) {

        imagenDos = document.getElementById(id);
        segundoResultado = numeros[id];
        imagenDos.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;;

        imagenDos.disabled = true;

        if (primerResultado == segundoResultado) {
            Toastify({
                text: "Excelente!",
                className: "info",
                style: {
                    background: "bg-primary",
                }
            }).showToast();
            tarjetasDestapadas = 0;

            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
            if (aciertos == 8) {
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} Ganaste!`
            }
        } else {
            Toastify({
                text: "Sigue intentando",
                className: "info",
                style: {
                    background: "bg-primary",
                    padding: 20,
                }
            }).showToast();
            setTimeout(() => {
                imagenUno.innerHTML = ' ';
                imagenDos.innerHTML = ' ';
                imagenUno.disabled = false;
                imagenDos.disabled = false;
                tarjetasDestapadas = 0;
            }, 2000);
        }
    }

}