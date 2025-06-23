function alterarStatus(id) {
    const item = document.getElementById(`game-${id}`);
    const imagem = item.querySelector(".dashboard__item__img");
    const botao = item.querySelector(".dashboard__item__button");

    if (botao.innerText === "Alugar") {
        imagem.classList.add("dashboard__item__img--rented");
        botao.innerText = "Devolver";
        botao.classList.add("dashboard__item__button--return");
    } else {
        const confirmacao = confirm("Tem certeza que deseja devolver este jogo?");
        if (confirmacao) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.innerText = "Alugar";
            botao.classList.remove("dashboard__item__button--return");
        }
    }
}
function contarJogosAlugados() {
    const alugados = document.querySelectorAll(".dashboard__item__img--rented");
    console.log(`Quantidade de jogos alugados: ${alugados.length}`);
}

function verificarPalindromo(texto) {
    const textoFormatado = texto.toLowerCase().replace(/[\W_]/g, "");
    const textoInvertido = textoFormatado.split("").reverse().join("");

    if (textoFormatado === textoInvertido) {
        console.log(`"${texto}" é um palíndromo.`);
    } else {
        console.log(`"${texto}" não é um palíndromo.`);
    }
}
