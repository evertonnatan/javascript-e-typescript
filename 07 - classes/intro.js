// Criando uma classe

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // Criando Métodos:
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const pessoa1 = new Pessoa("Everton", "Natan");
const pessoa2 = new Pessoa2("Everton", "Natan");

console.log(pessoa1)
console.log(pessoa2)

