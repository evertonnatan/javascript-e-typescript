// DIFERENÇAS ENTRE var, let e const

// LET TEM ESCOPO DE BLOCO, VEJA:

{
    let nome = 'Everton';
    console.log(nome);
};

{ 
    let nome = 'Everton';
    console.log(nome);

};

// O VAR ELEVA A DECLARAÇÃO DE TODAS AS VARIÁVEIS PARA O TOPO DO CÓDIGO, VEJA:

console.log(sobrenome)

var sobrenome = "Diniz"

// JÁ COM O LET ISSO NÃO OCORRE:

// console.log(prenome)

// let prenome = "Natã"
// SAÍDA: ReferenceError: Cannot access 'prenome' before initialization