const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("apareceu");
      observer.unobserve(entry.target);
    }
  });
});

const elementosParaAnimar = document.querySelectorAll(".animar-tela");

elementosParaAnimar.forEach((elemento) => {
  observer.observe(elemento);
});

const botaoLoja = document.getElementById("botao-loja");
const secaoLoja = document.getElementById("loja");
const botaoAvaliacao = document.getElementById("botao-avaliacao");
const secaoAvaliacao = document.getElementById("cards-usuarios-avaliacoes");

if (botaoLoja && secaoLoja) {
  botaoLoja.addEventListener("click", () => {
    secaoLoja.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (botaoAvaliacao && secaoAvaliacao) {
  botaoAvaliacao.addEventListener("click", () => {
    secaoAvaliacao.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
    const modalOverlay = document.querySelector(".overlay");
    const escolhaSalva = localStorage.getItem("cookiesAceitos");

    if (escolhaSalva !== null) {
        modalOverlay.classList.toggle("hide");
    }
});

function negouCookies() {
    const modalOverlay = document.querySelector(".overlay");
    modalOverlay.classList.toggle("hide")
    localStorage.setItem("cookiesAceitos", false);
}
function aceitouCookies() {
    const modalOverlay = document.querySelector(".overlay");
    modalOverlay.classList.toggle("hide");
    localStorage.setItem("cookiesAceitos", true);
}


document.addEventListener("DOMContentLoaded", () => {
  const botaoAbrir = document.getElementById("botao-abrir-carrinho");
  const botaoFechar = document.getElementById("botao-fechar-carrinho");
  const sidebar = document.getElementById("sidebar-carrinho");
  const overlay = document.getElementById("overlay-carrinho");

  // Função para abrir o carrinho com o 'event' como parâmetro
  function abrirCarrinho(event) {
    event.preventDefault(); // Impede que o link "#" faça a tela pular pro topo
    sidebar.classList.add("aberta");
    overlay.classList.add("aberta");
    document.body.style.overflow = "hidden";
  }

  function fecharCarrinho() {
    sidebar.classList.remove("aberta");
    overlay.classList.remove("aberta");
    document.body.style.overflow = "auto";
  }

  if (botaoAbrir) {
    botaoAbrir.addEventListener("click", abrirCarrinho);
  }

  if (botaoFechar && overlay) {
    botaoFechar.addEventListener("click", fecharCarrinho);
    overlay.addEventListener("click", fecharCarrinho);
  }
});