/**
 * ALGORITMO:
 * 
//  * Funcionamento em: https://youtu.be/Zxczb26Tu6s
O CPF é formado por 11 dígitos numéricos que seguem a máscara "###.###.###-##", 
a verificação do CPF acontece utilizando os 9 primeiros dígitos e, com um cálculo simples, 
verificando se o resultado corresponde aos dois últimos dígitos (depois do sinal "-").

Validação do primeiro dígito
Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 
e soma os resultados. 

O próximo passo da verificação também é simples, 
basta multiplicarmos esse resultado por 10 e dividirmos por 11.

O resultado que nos interessa na verdade é o RESTO da divisão. Se ele for igual ao primeiro dígito verificador (primeiro dígito depois do '-'), a primeira parte da validação está correta.

Observação Importante: Se o resto da divisão for igual a 10, nós o consideramos como 0.
 * 
 */

// RESOLUÇÃO DO PROFESSOR:

// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, '');
      }
    });
  }
  
  ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  };
  
  ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
  
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += (regressivo * Number(val));
      regressivo--;
      return ac;
    }, 0);
  
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  };
  
  ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  };
  
  const cpf = new ValidaCPF('070.987.720-03');
  
  if(cpf.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }