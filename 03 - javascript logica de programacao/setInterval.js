// setInterval e setTimeout estão disponíveis tanto no Node quanto no navegador.

// setInterval vai configurar um determinado intervalo de tempo para executar uma determinada função

// EXEMPLO:

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 2000);

// Parando a execução do código com o setTimeout:
setTimeout(function() {
    clearInterval(timer);
}, 20000);