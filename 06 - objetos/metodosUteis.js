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
// Object.defineProperties
// Object.defineProperty
// Object.values
// Object.entries
// Object.getOwnPropertyDescriptor
// Object.assign