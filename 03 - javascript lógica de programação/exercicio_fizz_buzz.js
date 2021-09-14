/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número = retorna o próprio número
 * Use a função com números de 0 a 100
 */

function numero (num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz"
    } else if (num % 5 === 0) {
        return "Buzz"
    } else if (num % 3 === 0) {
        return "Fizz"
    } else {
        return num
    }
    
}

for (let i = 0; i <= 100; i++) {
    console.log(i, numero(i));
}

// Testando a conexão com o repositório