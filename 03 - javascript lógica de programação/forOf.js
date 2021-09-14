// A STRING É ITERÁVEL (ELA TEM ÍNDICES)
// EXEMPLO COM for CLÁSSICO:
const nome = "Everton Natã Diniz Lima"

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// EXEMPLO COM for of:
const system = "Kali Linux"

for (let valor of system) {
    console.log(valor);
}