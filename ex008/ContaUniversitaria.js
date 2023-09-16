import {ContaBancaria} from "./ContaBancaria.js";

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero, "conta universitária");
  }

  sacar(valor) {
    if (valor <= 500 && valor <= this.saldo) {
      this.saldo -= valor;
      return true; 
    } else {
      return false;
    }
  }
}

export default ContaUniversitaria;
