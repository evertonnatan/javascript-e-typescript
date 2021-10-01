/**
 * ALGORITMO:
 * 
//  * Funcionamento em: https://youtu.be/Zxczb26Tu6s
O CPF é formado por 11 dígitos numéricos que seguem a máscara "###.###.###-##", 
a verificação do CPF acontece utilizando os 9 primeiros dígitos e, com um cálculo simples, 
verificando se o resultado corresponde aos dois últimos dígitos (depois do sinal "-").

Validação do primeiro dígito
Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 
e soma os resultados. 

O próximo passo da verificação também é simples, 
basta multiplicarmos esse resultado por 10 e dividirmos por 11.

O resultado que nos interessa na verdade é o RESTO da divisão. Se ele for igual ao primeiro dígito verificador (primeiro dígito depois do '-'), a primeira parte da validação está correta.

Observação Importante: Se o resto da divisão for igual a 10, nós o consideramos como 0.
 * 
 */

let cpf = '705.484.450-52';
let cfpClean = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cfpClean);

let dig1 = cpfArray[0] * 10;
let dig2 = cpfArray[1] * 9;
let dig3 = cpfArray[2] * 8;
let dig4 = cpfArray[3] * 7;
let dig5 = cpfArray[4] * 6;
let dig6 = cpfArray[5] * 5;
let dig7 = cpfArray[6] * 4;
let dig8 = cpfArray[7] * 3;
let dig9 = cpfArray[8] * 2;

const soma = dig1 + dig1 + dig3 + dig4 + dig5 + dig6 + dig7 + dig8 + dig9;

const validacao1 = soma * 10 / 11
const validacao2 = validacao1 % 11


console.log(soma)
console.log(validacao2)
console.log(cpfArray[2]);


console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));