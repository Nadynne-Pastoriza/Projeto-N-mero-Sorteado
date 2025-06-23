function comprar() {
    const tipoIngresso = document.getElementById("tipo-ingresso").value;
    const qtdInput = document.getElementById("qtd");
    const qtdSolicitada = parseInt(qtdInput.value);

    if (isNaN(qtdSolicitada) || qtdSolicitada <= 0) {
        alert("Por favor, informe uma quantidade válida de ingressos.");
        return;
    }

    let spanDisponivel;
    if (tipoIngresso === "pista") {
        spanDisponivel = document.getElementById("qtd-pista");
    } else if (tipoIngresso === "superior") {
        spanDisponivel = document.getElementById("qtd-superior");
    } else if (tipoIngresso === "inferior") {
        spanDisponivel = document.getElementById("qtd-inferior");
    }

    let disponivel = parseInt(spanDisponivel.innerText);

    if (qtdSolicitada > disponivel) {
        alert(`Não há ingressos suficientes para ${tipoIngresso.toUpperCase()}. Disponível: ${disponivel}`);
        return;
    }

    let novaQuantidade = disponivel - qtdSolicitada;
    spanDisponivel.innerText = novaQuantidade;

    qtdInput.value = "";

    alert(`Compra realizada com sucesso! Você comprou ${qtdSolicitada} ingresso(s) para ${tipoIngresso.toUpperCase()}.`);
}
