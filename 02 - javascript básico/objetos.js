function criaPessoa (nome, sobrenome, idade) { // Essa é uma function factory (https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Everton', 'Natã', 25);
const pessoa2 = criaPessoa('Jaqueline', 'Luna', 17);
const pessoa3 = criaPessoa('Ulyssa', 'Jansen', 43);
const pessoa4 = criaPessoa('Anna', 'Gusmão', 20);
const pessoa5 = criaPessoa('Deodoro', 'Fonseca', 58);

console.log(pessoa1.nome, pessoa2.idade, pessoa3.sobrenome, pessoa5)