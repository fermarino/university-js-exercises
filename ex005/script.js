const alunos = [];

function cadastrarAluno() {
  const nome = prompt("Digite o nome do aluno(a):");
  const aluno = { nome, notas: [] };
  alunos.push(aluno);
  alert(`Aluno(a) ${nome} cadastrado(a) com sucesso!`);
}

function cadastrarNotas() {
  const nome = prompt("Digite o nome do aluno para cadastrar notas:");
  const aluno = alunos.find((a) => a.nome === nome);

  if (aluno) {
    const numNotas = 3;
    for (let i = 0; i < numNotas; i++) {
      const nota = parseFloat(prompt(`Digite a nota ${i + 1} para ${aluno.nome}:`));
      aluno.notas.push(Math.round(nota));
    }
    alert("Notas cadastradas com sucesso!");
  } else {
    alert(`Aluno(a) ${nome} não encontrado(a).`);
  }
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return Math.round(soma / notas.length);
}

function exibirBoletim() {
  const nome = prompt("Digite o nome do aluno para exibir o boletim:");
  const aluno = alunos.find((a) => a.nome === nome);

  if (aluno) {
    const media = calcularMedia(aluno.notas);

    let status;
    if (media >= 7) {
      status = "Aprovado";
    } else if (media >= 5) {
      status = "Em Recuperação";
    } else {
      status = "Reprovado";
    }

    const boletim = `
      Nome: ${aluno.nome}
      Notas: ${aluno.notas.join(", ")}
      Média: ${media}
      Status: ${status}
    `;

    alert(boletim);
  } else {
    alert(`Aluno(a) ${nome} não encontrado.`);
  }
}

function menuPrincipal() {
  while (true) {
    const escolha = prompt(`Escolha uma opção:\n1. Cadastrar Aluno\n2. Cadastrar Notas\n3. Exibir Boletim\n4. Sair`);
    switch (escolha) {
      case "1":
        cadastrarAluno();
        break;
      case "2":
        cadastrarNotas();
        break;
      case "3":
        exibirBoletim();
        break;
      case "4":
        return;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  }
}

menuPrincipal();
