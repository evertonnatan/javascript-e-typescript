// Filter => Vai sempre retornar um array, com a mesma quantidade de elementos ou menor. 


const numeros = [5, 50, 80, 1, 22, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor, indice) {
    if (valor > 10 ) {
        return true;
    } else {
        return false;
    }
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados)

// EXEMPLO 02:

// Nosso exemplo deverá retornar as pessoas que têm o nome com 5 letras ou mais
// Nosso exemplo deverá retornar as pessoas que têm mais de 50 anos
// Nosso exemplo deverá retornar as pessoas cujos nomes terminam com "a"

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(function(name) {
    if(name.nome.length >= 5) {
        return true
    }
});

const pessoasComMaisDeCinquentaAnos = pessoas.filter(function(age) {
    if(age.idade > 50) {
        return true
    }
});

const pessoasQueTerminamComA = pessoas.filter(function(letraFinal) {
    if(letraFinal.nome.toLowerCase().endsWith('a')) {
        return true
    }
})

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(pessoasQueTerminamComA);