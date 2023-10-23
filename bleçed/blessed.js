const prompt = require("prompt-sync")();

const nomes = ["Hamburguer", "Batata Frita", "Refrigerante"];
const precos = [5.99, 2.99, 1.49];
const descricoes = ["Burger King", "Batata do mec", "Fanta uva"];

function exibirMenu(nomes, precos, descricoes) {
  console.log("Menu da Lanchonete:");
  for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1}. ${nomes[i]} - ${descricoes[i]} - R$ ${precos[i].toFixed(2)}`);
  }
}

function fazerPedido(nomeItem, nomes, precos, descricoes, quantidade) {
  const index = nomes.indexOf(nomeItem);
  if (index === -1) {
    return "Item não encontrado no menu.";
  }

  const precoTotal = precos[index] * quantidade;
  return `Pedido: ${quantidade}x ${nomeItem} - Total: R$ ${precoTotal.toFixed(2)}. Obrigado!`;
}

const pedidos = [];

while (true) {
  exibirMenu(nomes, precos, descricoes);
  const escolha = prompt("Digite o número do item que deseja pedir ('sair' para encerrar): ");

  if (escolha.toLowerCase() === "sair") {
    break;
  }

  const quantidade = parseInt(prompt("Digite a quantidade desejada: "));
  const nomeEscolhido = nomes[parseInt(escolha) - 1];
  const pedido = fazerPedido(nomeEscolhido, nomes, precos, descricoes, quantidade);
  pedidos.push(pedido);
}

function calcularTotal(pedidos, precos) {
  let total = 0;
  for (const pedido of pedidos) {
    const preco = parseFloat(pedido.match(/\d+\.\d+/));
    total += preco;
  }
  return total;
}

const totalConta = calcularTotal(pedidos, precos);

console.log("Resumo do pedido:");
for (const pedido of pedidos) {
  console.log(pedido);
}

console.log(`Preço total: R$ ${totalConta.toFixed(2)}`)
console.log("Obrigado por escolher a nossa lanchonete!")
