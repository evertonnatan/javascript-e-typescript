{
const data = new Date('1991-06-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;



if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda'
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta'
} else {
    diaSemanaTexto = 'Sábado'
} 

console.log(diaSemana, diaSemanaTexto.toString());
}



// REALIZANDO O PROCEDIMENTO ACIMA POR MEIO DO SWITCH CASE:

{
const datum = new Date('1987-04-18 00:00:00');
let wochentag = datum.getDay();
let wochentagText;

switch (wochentag) {
    case 0:
        wochentagText = "Domingo";
    break;
    case 1:
        wochentagText = "Segunda";
    break;
    case 2:
        wochentagText = "Terça";
    break;
    case 3:
        wochentagText = "Quarta";
    break;
    case 4:
        wochentagText = "Quinta";
    break;
    case 5:
        wochentagText = "Sexta";
    break;
    case 6:
        wochentagText = "Sábado";
    break;
}

console.log(wochentag, wochentagText)
}