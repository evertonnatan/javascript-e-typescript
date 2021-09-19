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