// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
function soma(x, y) {
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser números!');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma("1", 2));    
} catch(error) {
    console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.')
}

// FINALLY
/**
 * A cláusula finally é executada após a excecução do bloco try e da(s) cláusula(s) catch porém antes das declarações seguintes a declaração try. 
 * Ela sempre é executada, independente se uma exceção for lançada ou capturada.
 * A cláusula finally contém declarações para executarem após a execução do bloco try  e da(s) cláusula(s) catch  
 * porém antes das declarações seguintes a declaração try. 
 * A cláusula finally é excutada independente se uma exceção for lançada ou não. 
 * Caso uma exceção seja lançada, as declarações no interior da cláusula finally são executadas mesmo que nenhum catch manipule a exceção. 
 * Você pode utilizar a cláusula finally para fazer seu script falhar graciosamente quando uma exceção ocorrer; por exemplo, 
 * você pode precisar liberar um recurso que seu script possui vinculado. 
 */

try {
    // é executado quando NÃO há erros
} catch (e) {
    // é executado quando HÁ erros
} finally {
    // é executado sempre
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const hora = retornaHora();
console.log(hora)