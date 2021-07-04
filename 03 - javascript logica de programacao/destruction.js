// ATRIBUIÇÃO POR DESESTRUTURAÇÃO

let a = 'A';
let b = 'B';
let c = 'C';

//[a, b, c] = [1, 2, 3]; OU:

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c)

const numerais = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero, sextoNumero, setimoNumero, oitavoNumero, nonoNumero] = numerais;
const [um, dois, tres, ...resto] = numerais;

console.log( primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero, sextoNumero, setimoNumero, oitavoNumero, nonoNumero);
// OU PODEMOS USAR O OPERADOR REST:
console.log( um, dois, tres, ...resto);
// PULANDO VALORES: