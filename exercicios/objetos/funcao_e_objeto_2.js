function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };

}



const d1 = criarData(9, 10, 2010);
const d2 = criarData(25, 11, 2020);
const d3 = criarData(3, 12, 2021);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());