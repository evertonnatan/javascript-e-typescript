// Declaração de função (Function Hoisting)


 /**
  * Ou posso chamá-la aqui, antes de ser declarada:
  */

//falaOi():

function falaOi() {
    console.log("Oi!")
};


//Posso executar a função aqui, depois de ser declarada:
falaOi();

/**
 * Funções podem ser tratadas como dados (First-class Objects)
 */

// EXEMPLO:
const souUmDado = function() {
    console.log("Sou um dado.");
};

function executaFuncao(funcao) {
    console.log("Vou executar sua função abaixo");
    funcao();
};
executaFuncao(souUmDado);


// FUNÇÕES DENTRO DE OBJETOS (como métodos e notação de ponto)
const obj = {
    falar: function() {
        console.log("Estou falando...");
    }
};
obj.falar();

// FUNÇÕES DENTRO DE OBJETOS (como métodos e sem a notação de ponto)
const obj2 = {
    comer() {
        console.log("Estou comendo...");
    }
};
obj2.comer();