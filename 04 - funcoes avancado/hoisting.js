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