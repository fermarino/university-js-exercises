const biblioteca = [];

function mostrarMenu() {
  const opcao = prompt(`
    Menu Principal:
    1. Cadastrar Livro
    2. Alterar Livro
    3. Deletar Livro
    4. Realizar Empréstimo de Livro
    5. Devolver Livro
    6. Exibir Lista de Livros
    7. Sair
  `);
  return opcao;
}

function cadastrarLivro() {
  const titulo = prompt("Digite o título do livro:");
  const autor = prompt("Digite o autor do livro:");
  const id = biblioteca.length + 1;
  const emprestado = false;
  const livro = { id, titulo, autor, emprestado };
  biblioteca.push(livro);
  alert("Livro cadastrado com sucesso!");
}

function alterarLivro() {
  const idLivro = parseInt(prompt("Digite o ID do livro que deseja alterar:"));
  const livro = biblioteca.find(l => l.id === idLivro);

  if (livro) {
    const novoTitulo = prompt(`Novo título (${livro.titulo}):`) || livro.titulo;
    const novoAutor = prompt(`Novo autor (${livro.autor}):`) || livro.autor;
    
    livro.titulo = novoTitulo;
    livro.autor = novoAutor;
    
    alert("Livro alterado com sucesso!");
  } else {
    alert("Livro não encontrado.");
  }
}

function deletarLivro() {
  const idLivro = parseInt(prompt("Digite o ID do livro que deseja deletar:"));
  const index = biblioteca.findIndex(l => l.id === idLivro);

  if (index !== -1) {
    biblioteca.splice(index, 1);
    alert("Livro deletado com sucesso!");
  } else {
    alert("Livro não encontrado.");
  }
}

function realizarEmprestimo() {
  const idLivro = parseInt(prompt("Digite o ID do livro que deseja emprestar:"));
  const livro = biblioteca.find(l => l.id === idLivro);

  if (livro) {
    if (!livro.emprestado) {
      livro.emprestado = true;
      alert("Livro emprestado com sucesso!");
    } else {
      alert("Livro já emprestado.");
    }
  } else {
    alert("Livro não encontrado.");
  }
}

function devolverLivro() {
  const idLivro = parseInt(prompt("Digite o ID do livro que deseja devolver:"));
  const livro = biblioteca.find(l => l.id === idLivro);

  if (livro) {
    if (livro.emprestado) {
      livro.emprestado = false;
      alert("Livro devolvido com sucesso!");
    } else {
      alert("Livro não está emprestado.");
    }
  } else {
    alert("Livro não encontrado.");
  }
}

function exibirListaLivros() {
  let lista = "Lista de Livros:\n";
  for (const livro of biblioteca) {
    lista += `ID: ${livro.id}, Título: ${livro.titulo}, Autor: ${livro.autor}\n`;
  }
  alert(lista);
}

let opcao;
do {
  opcao = mostrarMenu();
  switch (opcao) {
    case "1":
      cadastrarLivro();
      break;
    case "2":
      alterarLivro();
      break;
    case "3":
      deletarLivro();
      break;
    case "4":
      realizarEmprestimo();
      break;
    case "5":
      devolverLivro();
      break;
    case "6":
      exibirListaLivros();
      break;
    case "7":
      alert("Saindo do sistema.");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "7");
