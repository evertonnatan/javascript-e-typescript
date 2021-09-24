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

// Outro Exemplo:

let numeros1 = [1, 2, 3, 4, 5]; //vetor original

let quadrados = numeros1.map(function(item){
   return Math.pow(item, 2); //retorna o item original elevado ao quadrado
});

console.log(quadrados); //imprime 1,4,9,16,25

// No exemplo a seguir mapeamos um array de objetos e retornamos apenas uma propriedade de cada item:

var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
 ];
 
 var podioPorPais = vencedores.map(function(item, indice){
    return item.pais;
 });
 
 console.log(podioPorPais); // [ 'Brasil', 'EUA', 'Canadá' ]

 /**Map x Foreach
Os arrays em JavaScript possuem um outro método, chamado forEach, que às vezes confunde os desenvolvedores iniciantes 
quanto às diferenças entre ele e o map. 
Ambos percorrem o vetor original e para cada item podem executar um determinado procedimento, 
porém as semelhanças são apenas essas. O método forEach tem o objetivo apenas de iterar sobre um array, 
enquanto o map usa essa iteração como meio para chegar ao seu objetivo final, que é obter um novo array resultante do 
mapeamento do original. */