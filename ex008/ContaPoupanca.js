import {ContaBancaria} from "./ContaBancaria.js";

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero, "conta poupança");
  }
}

export default ContaPoupanca;
