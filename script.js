let atual = 0;
const cards = 6;
const cardsVisiveis = 3;
const tamanhoSalto = 420;

function rolarDireita() {
    const trhilha = document.getElementById('trilha-carrossel');
    atual++;

    if (atual > (cards - cardsVisiveis)) {
        atual = 0;
    }

    atualizarCarrossel(trilha);
}

function rolarEsquerda() {
    const trhilha = document.getElementById("trilha-carrossel");
    atual--;

    if (atual < 0) {
        atual = cards - cardsVisiveis;
    }

    atualizarCarrossel(trilha);
}
function atualizarCarrossel(trilha) {
    const deslocamentoPx = -(atual * tamanhoSalto);
    trilha.style.transform = `translateX(${deslocamentoPx}px)`;
}