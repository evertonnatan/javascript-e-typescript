/**
 * Se a tarefa é validar se, pelo menos, um dos elementos de um
 * Array satisfaz uma dada condição, o some é o método perfeito
 * para o trabalho. 
 * 
 */

// EXEMPLO: verificar se há algum número primo


function isPrime (value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1
}

const oneMoreArray = [6, 11, 14, 42];

console.log(oneMoreArray.some(isPrime));