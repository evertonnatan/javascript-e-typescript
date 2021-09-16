// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(3 ,2);
console.log(nomes, removidos);

/**
 * (3) ['Maria', 'João', 'Eduardo']
0: "Maria"
1: "João"
2: "Eduardo"
length: 3
[[Prototype]]: Array(0)
 
(2) ['Gabriel', 'Julia']
0: "Gabriel"
1: "Julia"
length: 2

 */

// Número máximo que o JavaScript retorna:
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308