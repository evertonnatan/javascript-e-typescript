// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**O método map() invoca a função callback passada por argumento para cada elemento do Array 
 * e devolve um novo Array como resultado.  * 
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor) {
    return valor * 2
});

console.log(numerosEmDobro)

// EXEMPLO 2:

// Para cada elemento, retorne apenas uma string com o nome da pessoa. 
// Para cada elemtnto, remova apenas a chave "nome" do objeto
// Para cada elemento, adicione uma chave id em cada objeto


const pessoas = [
    { nome: "Everton", idade: 19 },
    { nome: "Natan", idade: 23 },
    { nome: "Goku", idade: 94 },
    { nome: "Naruto", idade: 16 },
    { nome: "Madara", idade: 120 },
];

const nomes = pessoas.map(function(obj) {
    return obj.nome;
});

console.log(nomes);

const idades = pessoas.map(function(obj){ 
    return obj.idade
});

console.log(idades);

const comId = pessoas.map(function(obj, indice) {
    obj.id = indice + 1;
    return obj
})

console.log(comId)