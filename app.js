
const imagen = document.querySelectorAll(".carta")
const frente = document.querySelectorAll(".frente")

imagenAleatoria()
Click()

function imagenAleatoria() {
    imagen.forEach(aleatorio => {

        const numeros = [...Array(imagen.length).keys()]
        const random = Math.floor(Math.random() * imagen.length)

        aleatorio.style.order = numeros[random]
    })
}

function Click(){
    for (let i = 0; i < imagen.length; i++) {

        imagen[i].addEventListener('click', ()=>{

            frente[i].classList.add('mostrar')
        })
    }
}

