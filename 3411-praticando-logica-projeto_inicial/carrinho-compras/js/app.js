let valorTotal = 0;
let listaProdutos = document.getElementById("lista-produtos");
let campoTotal = document.getElementById("valor-total");

function adicionar() {
    let produtoSelect = document.getElementById("produto");
    let produtoTexto = produtoSelect.value;
    let quantidade = parseInt(document.getElementById("quantidade").value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

let [nomeProduto, precoTexto] = produtoTexto.split(" - R$");
let preco = parseFloat(precoTexto);

let subtotal = preco * quantidade;

let novoItem = document.createElement("section");
    novoItem.className = "carrinho__produtos__produto";
    novoItem.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>`;

    listaProdutos.appendChild(novoItem);

    valorTotal += subtotal;
    campoTotal.innerText = `R$${valorTotal}`;
    document.getElementById("quantidade").value = "";
}

function limpar() {
    listaProdutos.innerHTML = "";
    valorTotal = 0;
    campoTotal.innerText = "R$0";
    document.getElementById("quantidade").value = "";
}