const t1 = false;
const t2 = true;

let comprarTV50 = t1 && t2;
console.log('Vamos comprar a tv de 50"? ',comprarTV50
);  // se colocar vírgula, não precisa colocar o símbolo de concatenação (+); Esse exemplo é and (e).

let comprarTV32 = t1 !== t2;
console.log('Vamos comprar a tv de 32"? ', comprarTV32); // XOR


let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete? ', tomarSorvete
); //OR

let ficarEmCasa = !tomarSorvete
console.log('Vamos ficar em casa? ', ficarEmCasa
); // Not
