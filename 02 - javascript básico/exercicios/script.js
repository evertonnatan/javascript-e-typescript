// let num1 = prompt('Digite um número');
// let num2 = prompt('Digite outro número');

// num1 = Number(num1);
// num2 = Number(num2);

// alert(`O resultado da sua conta foi: ${num1 + num2}`)

// EXERCÍCIO DE VARIÁVEIS

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varATemporaria = varA;

varA = varB;
varB = varC;
varC = varATemporaria;

// Resolução alternativa:
// [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)