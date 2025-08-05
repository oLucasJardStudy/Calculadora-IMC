let nome = 'Lucas';
let peso = 80;
let altura = 1.80;

function calculaIMC(peso, altura) {
    return peso / (altura * altura);
    }

console.log(nome + " seu IMC é: " + calculaIMC(peso, altura)); 

