let amigos = [];

function adicionar() {
    const input = document.getElementById("nome-amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite o nome de um amigo!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById("lista-amigos");
    lista.innerText = amigos.join(", ");
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let sorteio = [];
    let amigosDisponiveis = [...amigos];

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];

        let possiveis = amigosDisponiveis.filter(a => a !== amigo);

        if (possiveis.length === 0) {
            alert("Não foi possível sortear. Tente novamente.");
            return;
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio.push(`${amigo} ➡️ ${sorteado}`);

        amigosDisponiveis = amigosDisponiveis.filter(a => a !== sorteado);
    }

    document.getElementById("lista-sorteio").innerHTML = sorteio.join("<br>");
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerText = "";
    document.getElementById("lista-sorteio").innerText = "";
    document.getElementById("nome-amigo").value = "";
}