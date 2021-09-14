const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        continue;
    }

    if (numero === 7) {
        break;
    }

    console.log(numero)
}

// EXERCÍCIO: escreva uma função que recebe 2 números e retorne o maior deles

function recebeNumero (num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

console.log(recebeNumero(9, 8));