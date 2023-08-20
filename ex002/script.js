function calculator(fn, num1 = 0, num2 = 0) {
  if (typeof fn === 'function') {
      return fn(num1, num2);
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

while (true) {
  const operacao = parseInt(prompt(
      'Escolha a operação:\n' +
      '1. Somar\n' +
      '2. Subtrair\n' +
      '3. Multiplicar\n' +
      '4. Sair'
  ));

  if (operacao === 4) {
      break;
  }

  const num1 = parseFloat(prompt('Digite o primeiro número:'));
  const num2 = parseFloat(prompt('Digite o segundo número:'));

  let resultado;

  switch (operacao) {
      case 1:
          resultado = calculator(somar, num1, num2);
          break;
      case 2:
          resultado = calculator(subtrair, num1, num2);
          break;
      case 3:
          resultado = calculator(multi, num1, num2);
          break;
      default:
          alert('Opção inválida!');
          continue;
  }

  alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
}