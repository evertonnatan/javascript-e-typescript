const nomes = new Array('Jacinto', 'Pinto', 'Botelho');
nomes[2 ] = 'João das Neves';
delete[2];
console.log(nomes);

// Usando o "unshift"

const nomes2 = ['Eduardo', 'Maria', 'Joana'];
nomes2.unshift("João");
nomes2.unshift("Wallace");
console.log(nomes2)

/**
 * O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições 
 * início e fim (fim não é necessário) de um array original. 
 * O Array original não é modificado.
 */

// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
var citricos = frutas.slice(1, 3);

console.log(citricos)
// citricos contem ['Laranja','Limao']

/**
 * O método split() divide uma String em uma lista ordenada de substrings, 
 * coloca essas substrings em um array e retorna o array. 
 * A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
 */

 var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

 console.log(names);
 
 var re = /\s*;\s*/;
 var nameList = names.split(re);
 
 console.log(nameList);

 /**SAÍDA: ['Harry Trump', 'Fred Barney', 'Helen Rigby', 'Bill Abel', 'Chris Hand ']
0: "Harry Trump"
1: "Fred Barney"
2: "Helen Rigby"
3: "Bill Abel"
4: "Chris Hand "
 */

/**O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string. */

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// REFERÊNCIA 2: https://www.w3schools.com/jsref/jsref_splice.asp