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


// DESESTRUTURAÇÃO DE UM OBJETO:

const pessoa = {
    nome: 'Everton',
    sobrenome: 'Natã',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 1500
    }
};

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO:
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

const {endereco: {rua: r = 123456, numero}} = pessoa; // nesse caso, atribuí o valor de rua à variável 'r'. Caso não haja a variável 'r', ser-lhe-á atribuído o valor padrão "123456"
console.log(r);