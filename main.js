const imagem = document.querySelector('.biscoito')
const caixa1 = document.querySelector('.container1')
const caixa2 = document.querySelector('.container2')


imagem.addEventListener('click', function () {
    toggleContainer()
})

function toggleContainer() {
    caixa1.classList.toggle('hide')
    caixa2.classList.toggle('hide')
}