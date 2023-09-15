let saldo = 1000;

let historicoTransacoes = [];

function depositar() {
  const valor = parseFloat(prompt('Digite o valor a ser depositado:'));
  if (isNaN(valor) || valor <= 0) {
    alert('Por favor, insira um valor válido para depósito.');
    return;
  }
  saldo += valor;
  const transacao = {
    tipo: 'Depósito',
    valor: valor,
    data: new Date().toLocaleString()
  };
  historicoTransacoes.push(transacao);
  alert(`Depósito de R$ ${valor} realizado com sucesso.`);
}

function sacar() {
  const valor = parseFloat(prompt('Digite o valor a ser sacado:'));
  if (isNaN(valor) || valor <= 0 || valor > saldo) {
    alert('Saque inválido. Verifique seu saldo e insira um valor válido.');
    return;
  }
  saldo -= valor;
  const transacao = {
    tipo: 'Saque',
    valor: valor,
    data: new Date().toLocaleString()
  };
  historicoTransacoes.push(transacao);
  alert(`Saque de $${valor} realizado com sucesso.`);
}

function verSaldo() {
  alert(`Seu saldo atual é de R$ ${saldo}`);
}

function verHistorico() {
  let historico = 'Histórico de Transações:\n';
  for (const transacao of historicoTransacoes) {
    historico += `${transacao.tipo}: R$ ${transacao.valor} em ${transacao.data}\n`;
  }
  alert(historico);
}

let continuar = true;
while (continuar) {
  const opcao = prompt(
    `Escolha uma opção:\n1. Depositar\n2. Sacar\n3. Ver Saldo\n4. Ver Histórico de Transações\n5. Sair`
  );
  switch (opcao) {
    case '1':
      depositar();
      break;
    case '2':
      sacar();
      break;
    case '3':
      verSaldo();
      break;
    case '4':
      verHistorico();
      break;
    case '5':
      continuar = false;
      alert('Obrigado por usar nosso sistema. Adeus!');
      break;
    default:
      alert('Opção inválida. Por favor, escolha uma opção válida.');
      break;
  }
}
