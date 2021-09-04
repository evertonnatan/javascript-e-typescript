function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao("Natã");
const funcao2 = retornaFuncao("Everton");
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());