"use strict";
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredonda(valor) {
    let resultado;
    if (typeof valor === "number") {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredonda(" 100.5 "));
console.log(arredonda(22.9));
