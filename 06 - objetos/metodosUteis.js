// Object.keys

//Object.keys() retorna um array cujo os  elementos são strings correspondentes para a propriedade enumerável 
//encontrada diretamente sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as 
//propriedades do objeto manualmente.

// Exemplos
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array com objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array como objeto com ordenação aleatória por chave
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']


// Object.freeze

/**O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele; 
 * impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, 
 * ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. 
 * Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado. */

// Exemplos

var obj = {
    prop: function() {},
    foo1: 'bar'
  };
  
  // Novas propriedades podem ser adicionadas, propriedades existentes podem ser alteradas ou removidas
  obj.foo1 = 'baz';
  obj.lumpy = 'woof';
  delete obj.prop;
  
  // Tanto o objeto que está sendo passado, bem como o objeto retornado será congelado.
  // É desnecessário salvar o objeto retornado para congelar o objeto original.
  var o = Object.freeze(obj);
  
  o === obj; // true
  Object.isFrozen(obj); // === true
  
  // De agora em diante qualquer alteração irá falhar
  obj.foo1 = 'quux'; // silenciosamente não faz nada.
  obj.quaxxor = 'the friendly duck'; // silenciosamente não adiciona a propriedade
  
  // ...e em modo strict tais tentativas irão lançar TypeErrors
  function fail(){
    'use strict';
    obj.foo1 = 'sparky'; // throws um TypeError
    delete obj.quaxxor; // throws um TypeError
    obj.sparky = 'arf'; // throws um TypeError
  }
  
  fail();
  
  // As tentativas de alteração através de Object.defineProperty também irão lançar
  Object.defineProperty(obj, 'ohai', { value: 17 }); // throws um TypeError
  Object.defineProperty(obj, 'foo', { value: 'eit' }); // throws um TypeError
  



// Object.defineProperties
// Object.defineProperty
// Object.values
// Object.entries
// Object.getOwnPropertyDescriptor
// Object.assign