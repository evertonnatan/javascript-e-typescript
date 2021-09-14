const nome = "Everton";

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = "Natã";
    falaNome();
}

usaFalaNome();