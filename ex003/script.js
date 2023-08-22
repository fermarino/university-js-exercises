// ame a ema
// socorram me subi no onibus em marrocos
// arara

function ehPalindromo(palavra) {
  palavra = palavra.replace(/\s/g,'').toLowerCase();
  if (palavra === palavra.split('').reverse().join('')) {
      alert('A palavra/frase é um palíndromo!');
  } else {
      alert('A palavra/frase não é um palíndromo!');
  }
}

while (true) {
  const palavra = prompt("Digite uma palavra ou frase (ou digite 'sair' para sair): ");
  
  if (palavra.toLowerCase() === 'sair') {
    break;
  }

  ehPalindromo(palavra);
}

alert('Obrigado por usar o verificador de palíndromos!');
