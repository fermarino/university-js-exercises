import {ContaBancaria} from "./ContaBancaria.js";

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero, "conta corrente");
    this.cartaoCredito = cartaoCredito;
  }

  getCartaoCredito() {
    return this.cartaoCredito;
  }

  setCartaoCredito(novoCartaoCredito) {
    this.cartaoCredito = novoCartaoCredito;
  }
}

export default ContaCorrente;
