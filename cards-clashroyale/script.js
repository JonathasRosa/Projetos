/*
OBJETIVO - 1: Quando clicarmos na seta de avançar temos que mostrar a próxima carta.
      - passo 1 : Dar um jeito de pegar o elemento HTML da seta avançar.
      - passo 2 : Dar um jeito de identificar o clic do usuário na seta avançar.
      - passo 3 : fazer aparecer a próxima carta.
      - passo 4 : buscar a carta que está selecionada que está selecionada e esconcer.
OBJETIVO - 2: Quando clicarmos na seta de volar temos que mostrar a carta anterior 
carata.
      - passo 1 : Dar um jeito de pegar o elemento HTML da seta voltar.
      - passo 2 : Dar um jeito de identificar o clic do usuário na seta voltar.
      - passo 3 : fazer aparecer a carta anterior.
      - passo 4 : buscar a carta que está selecionada e esconcer.
*/


const btnAvancar = document.getElementById('btn-avançar');
const btnVoltar = document.getElementById('btn-voltar');
const cartas = document.querySelectorAll('.carta');
let cartaAtual = 0;

function esconderCartaSelecionada() {
    const cartaSelecionada = document.querySelector('.selecionada');
    cartaSelecionada.classList.remove('selecionada');
}
function mostrarCarta(indiceCarta) {
    cartas[indiceCarta].classList.add('selecionada');
}

btnAvancar.addEventListener('click', function () {
    if (cartaAtual === cartas.length - 1) return;

    esconderCartaSelecionada();

    cartaAtual++;
    mostrarCarta(cartaAtual); 
});

btnVoltar.addEventListener('click', function () {
    if (cartaAtual === 0) return;

    esconderCartaSelecionada();

    cartaAtual--;
    mostrarCarta(cartaAtual);
});
