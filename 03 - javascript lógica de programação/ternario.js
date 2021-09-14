// ? : 

const pontuacaoUsuario = 1900;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal')
};

// RESCREVENDO O CÓDIGO ACIMA USANDO O OPERADOR TERNÁRIO:

const imdb = 8;

const qualidadeDoFilme = imdb >= 7 ? "Filme bom" : "Filme ruim";
console.log(qualidadeDoFilme);

// EXERCÍCIO DA AULA 26:

/**
 * Escreva uma função chamada 'ePaisagem' que 
 * recebe dois argumentos, largura (x) e altura (y) de uma imagem (number).
 * A função deve retornar true se a imagem estiver no modo paisagem.
 */
// MINHA RESOLUÇÃO:
function ePaisagem (x, y) {
    if (x > y) {
        return true
    } else {
        return false
    }
}
console.log(ePaisagem(5, 6));

// RESOLUÇÃO DO PROFESSOR (com arrow function):
const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(1920, 1080));
