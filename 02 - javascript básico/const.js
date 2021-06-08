// String = Text | Number = Número

const primeiroNumero = "5";
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;

const resultadoDuplicado = resultado * 2;


console.log(typeof(primeiroNumero + segundoNumero));

//EXERCÍCIO AULA 10:

const nome = 'Everton';
const sobrenome = 'Natan';
const idade = 30;
const peso = 69;
const altura = 1.62;
let imc; // fórmula: peso/(altura * altura);
let anoNascimento;
let today = new Date();
let year = today.getUTCFullYear();


imc = peso / (altura * altura);
anoNascimento = year - idade

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "KG, tem", altura, "de altura e seu IMC é de", imc, nome, sobrenome, "nasceu em", anoNascimento )
