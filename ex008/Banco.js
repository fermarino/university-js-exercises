import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {ContaUniversitaria} from "./ContaUniversitaria.js";

const contaCorrente = new ContaCorrente("001", "12345", true);
const contaPoupanca = new ContaPoupanca("002", "67890");
const contaUniversitaria = new ContaUniversitaria("003", "13579");

console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaUniversitaria);

contaCorrente.depositar(1000);
contaCorrente.sacar(500);
console.log("Saldo da Conta Corrente:", contaCorrente.getSaldo());

contaPoupanca.depositar(500);
contaPoupanca.sacar(200);
console.log("Saldo da Conta Poupança:", contaPoupanca.getSaldo());

contaUniversitaria.depositar(300);
contaUniversitaria.sacar(600);
console.log("Saldo da Conta Universitária:", contaUniversitaria.getSaldo());
