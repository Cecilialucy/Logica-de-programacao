function sempreRetornaUm() {
    return 1;
}

let valor = sempreRetornaUm() + 999
console.log(valor);



function textoOuNumero(retornaTexto) {
    if(retornaTexto) {
        return 'Sou um texto';
    } else {
        return 123;
    }
}

let texto = textoOuNumero(true);
console.log(texto);