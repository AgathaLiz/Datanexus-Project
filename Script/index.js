const slider = document.querySelectorAll('.slider')
const bntPrev = document.getElementById('prev-button')
const bntNext = document.getElementById('next-button')

let currentSlide = 0;

function hideSlider() {

    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {

    slider[currentSlide].classList.add('on')
}

function nextSlider() {

    hideSlider()
    if(currentSlide == slider.length -1) {

        currentSlide = 0
    } else {

        currentSlide++
    }

    showSlider()
}

function prevSlider() {

    hideSlider()
    if(currentSlide == 0) {

        currentSlide = slider.length -1
    } else {

        currentSlide--
    }

    showSlider()
}

bntNext.addEventListener('click', nextSlider)
bntPrev.addEventListener('click', prevSlider)



/*---------------------------------------------------------------*/


    function armazenarInformacoes(viagemId) {
        // Obtém os dados de cada viagem com base no id
        let viagem = document.getElementById(viagemId);
        let imagem = viagem.querySelector('img').src; // Obtém a imagem
        let nomeLugar = viagem.querySelector('.descricao').innerText; // Obtém o nome do lugar
        let preco = viagem.querySelector('.preco').innerText; // Obtém o preço

        // Cria um objeto com as informações
        let passagem = {
            imagem: imagem,
            nomeLugar: nomeLugar,
            preco: preco
        };

        // Armazena o objeto no localStorage
        localStorage.setItem("passagemEscolhida", JSON.stringify(passagem));
    }


/*----------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se existe algum usuário armazenado no LocalStorage
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    // Se houver um usuário logado, esconde o botão de login
    if (usuarioLogado) {
        let loginButton = document.getElementById('login');
        let loginButtonLi = document.getElementById('login2');
        if (loginButton) {
            loginButton.style.display = 'none';  // Esconde o botão de login
            loginButtonLi.style.display = 'none';
        }
    }
});
