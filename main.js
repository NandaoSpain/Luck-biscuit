import { retornaFrase } from "./sorte.js"
const imagem = document.querySelector('.biscoito')
const caixa1 = document.querySelector('.container1')
const caixa2 = document.querySelector('.container2')
const sorte1 = document.querySelector('.sorte')
const denovo = document.querySelector('.tryAgain')

imagem.addEventListener('click', function () {
    toggleContainer()
    sorte1.innerHTML = retornaFrase()
})

denovo.addEventListener('click', function () {
    toggleContainer()

})

function toggleContainer() {
    caixa1.classList.toggle('hide')
    caixa2.classList.toggle('hide')
}


