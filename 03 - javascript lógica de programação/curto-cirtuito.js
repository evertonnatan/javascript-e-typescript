// EM JAVASCRIPT TUDO PODE SER AVALIADO (NO SENTIDO LÓGICO)

// VALORES FALSOS
console.log(false);
console.log(0);
console.log('');
console.log(``);
console.log("");
console.log(null);
console.log(NaN);



// VALORES VERDADEIROS

/*
Em JavaScript, no encadeamento de 'ands' (&&), a expressão retornará o ÚLTIMO valor verdadeiro, caso haja.
Em JavaScript, no encadeamento de 'ors' (||), a expressão retornará o PRIMEIRO valor verdadeiro, caso haja. => Se todas forem falsas, retornará o último valor falso.

*/



const a = 0;
const b = null;
const c = "false"; // pegadinha!!
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // Retornará a String "false", porém um valor verdadeiro.
