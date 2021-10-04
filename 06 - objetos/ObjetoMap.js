const pessoas = [ 
    { id: 3, nome: 'João'},
    { id: 2, nome: 'Tereza'},
    { id: 1, nome: 'Agamenon'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);

// As chaves de um Objeto devem ser uma String ou um Symbol
// Mais detalhes em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
