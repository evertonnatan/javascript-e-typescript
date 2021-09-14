const frutas = ['Pêra', 'Maçã', 'Uva', 'Banana', 'Laranja', 'Goiaba'];

for (let i in frutas) {
    console.log(i);
}

// ITERANDO EM UM OBJETO:

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'de Deus',
    idade: 30
};

for (let i in pessoa) {
    console.log(pessoa.nome)
}