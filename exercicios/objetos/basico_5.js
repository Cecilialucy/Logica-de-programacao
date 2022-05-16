const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            'Padaria X',
            'Shopping Y',
        ]
    },
    nomeFilhos: ['Beatriz', 'Carlos', 'Gabriel']
};
console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1]);