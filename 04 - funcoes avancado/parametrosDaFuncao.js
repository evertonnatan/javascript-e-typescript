/**O objeto arguments é uma variável local disponível dentro de todas as funções. 
 * Você pode referenciar os argumentos de uma função dentro da função usando o objeto arguments. 
 * Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0. 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments (acesso em 27/07/2021)
 */

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao(1,2,3,4,5,6,7,8,9);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;        
    }

    console.log(acumulador);
}
conta('*', 1,20,30,40,50);

// testando a conexão com o code-server