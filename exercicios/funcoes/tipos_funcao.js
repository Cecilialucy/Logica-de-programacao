// #1: Função com parâmetros e com retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(resultado);
console.log(somar(30, 56));

// #2: Função com parâmetros e sem retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3: Função sem parâmetros e com retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4: Função sem parâmetros e sem retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}
exibirHoraAtual();