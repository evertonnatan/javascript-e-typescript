// Os objetos podem ser criados com objetos literais, com a palavra-chave  new  e (em ECMAScript 5) com a função  Object.create().
// NOTAÇÕES DE PONTO OU DE COLCHETES
/**https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors
 * 
 * Os assessores de propriedade fornecem acesso as propriedades de um objeto usando a notação de ponto ou a notação 
 * de colchetes.

Sintaxe
object.property
object["property"]
 */

// EXEMPLO PRÁTICO
const pessoa1 = new Object();
pessoa1.nome = "Everton";
pessoa1.sobrenome = "Natan";
pessoa1.idade = 26;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
const pessoa2 = (`${pessoa1.nome} nasceu no ano de`)
console.log(pessoa2, + pessoa1.getDataNascimento());