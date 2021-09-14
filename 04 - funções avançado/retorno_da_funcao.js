// Entendendo o escopo léxico das funções (closures)

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(40));
console.log(triplica(60));
console.log(quadriplica(90));

//Commit do Google Cloud