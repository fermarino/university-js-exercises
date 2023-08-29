let produtos = [];
let pessoas = [];

// Função para exibir o menu e processar as opções
function exibirMenu() {
  while (true) {
    const escolha = prompt(
      "Escolha uma opção:\n" +
      "1 - Cadastrar Produto\n" +
      "2 - Cadastrar Pessoa\n" +
      "3 - Sortear\n" +
      "4 - Sair"
    );

    switch (escolha) {
      case "1":
        cadastrarProduto();
        break;
      case "2":
        cadastrarPessoa();
        break;
      case "3":
        realizarSorteio();
        break;
      case "4":
        return;
      default:
        alert("Opção inválida. Escolha novamente.");
    }
  }
}

// Função para cadastrar um produto
function cadastrarProduto() {
  const produto = prompt("Digite o nome do produto:");
  produtos.push(produto);
  alert("Produto cadastrado com sucesso!");
}

// Função para cadastrar uma pessoa
function cadastrarPessoa() {
  const pessoa = prompt("Digite o nome da pessoa:");
  pessoas.push(pessoa);
  alert("Pessoa cadastrada com sucesso!");
}

// Função para realizar o sorteio
function realizarSorteio() {
  if (pessoas.length === 0 || produtos.length === 0) {
    alert("Não há pessoas ou produtos cadastrados para realizar o sorteio.");
    return;
  }

  const numeroAleatorio = Math.floor(Math.random() * produtos.length);
  const pessoaSorteada = pessoas[Math.floor(Math.random() * pessoas.length)];

  alert(`A pessoa sorteada ${pessoaSorteada} ganhou o produto: ${produtos[numeroAleatorio]}`);
}

exibirMenu();