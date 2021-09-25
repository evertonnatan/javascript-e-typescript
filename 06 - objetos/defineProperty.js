// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty


/**O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, 
 * ou modifica uma propriedade já existente em um objeto, e retorna o objeto. Você invoca este método diretamente no construtor do Object 
 * ao invés de invocar em uma instância do tipo Object. SINTAXE: Object.defineProperty(obj, prop, descriptor). Por padrão, 
 * valores incluídos utilizando Object.defineProperty() são imutáveis.
 * 
 * Os descritores de propriedades presentes nos objetos se apresentam em duas variedades: descritores de dados e descritores de assessores. Um descritor de dado é uma propriedade que contém um valor, podendo este ser gravável ou não. Um descritor de assessor é uma propriedade definida como um par de funções getter-setter. Um descritor deve ser de uma destas variedades; não pode ser de ambas.

Ambos os descritores de dados e de assessor são objetos. Eles compartilham as seguintes chaves obrigatórias:

configurable
true se e somente se o tipo deste descritor de propriedade pode ser alterado e se a propriedade pode ser deletada do objeto correspondente.
Valor padrão é false.
enumerable
true se e somente se esta propriedade aparece durante enumeração das propriedades no objeto correspondente.
Valor padrão é false.
Um descritor de dados também possui as seguintes chaves opcionais:

value
O valor associado com a propriedade. Pode ser qualquer valor válido em Javascript  (número, objeto, função, etc).
Valor padrão é undefined.
writable
true se e somente se o valor associado com a propriedade pode ser modificada com um operador de atribuição (en-US).
Valor padrão é false.
Um descritor de assessor também possui as seguintes chaves opcionais:

get
Uma função que servirá como um getter da propriedade, ou undefined se não houver getter. Quando a propriedade é acessada, 
esta função é chamada sem argumentos e com this define para o objeto no qual a propriedade é acessada (este pode não ser 
    o objeto sobre o qual a propriedade está definida devido a herança). O valor retornado será usado como valor da propriedade.
Valor padrão é undefined.
set
A função que servirá como um setter para a propriedade, ou undefined se não houver setter. Quando a propriedade é atribuída, 
esta função é chamada com um argumento (o valor sendo atribuído para a propriedade) e com this configura o objeto através do qual a propriedade é atribuída.
Valor padrão é undefined.
 * 

Quando uma propriedade já existe, Object.defineProperty() tenta modificá-la de acordo com os valores do descritor e a configuração atual do objeto. 
Se o descritor antigo possuía seu atributo configurable como false a propriedade é chamada "não configurável" e nenhum atributo pode ser alterado 
(exceto a alteração irreversível de writable para false).

O atributo enumerable de uma propriedade define se ela deve ser exibida em uma repetição for...in e por Object.keys() ou não.
 * 
 * */

// usando __proto__
var obj = {};
var descriptor = Object.create(null); // não herdar propriedades
// não enumerável, não configurável, não gravável por padrão
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

// declarando explicitamente
Object.defineProperty(obj, 'key', {
  enumerable: false,   // não enumerável
  configurable: false, // não configurável
  writable: false,     // não gravável
  value: 'static'
});

// reciclando um mesmo objeto
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}

// ... e ...
Object.defineProperty(obj, 'key', withValue('static'));

// se o método freeze estiver disponível, prevenir as propriedades
// (value, get, set, enumerable, writable, configurable) de serem
// incluídas ou removidas do protótipo do objeto
(Object.freeze || Object)(Object.prototype);



// EXEMPLOS DA AULA:

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar?
        configurable: true // configurável?
    });
}

const p1 = new Produto('Camiseta', 20, 4);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}