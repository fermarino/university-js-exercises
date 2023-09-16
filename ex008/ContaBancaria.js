class ContaBancaria {
  constructor(agencia, numero, tipo = "conta corrente", saldo = 0) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
  }

  getSaldo() {
    return this.saldo;
  }

  setSaldo(novoSaldo) {
    this.saldo = novoSaldo;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false; 
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return true;
    } else {
      return false;
    }
  }
}

export default ContaBancaria;
