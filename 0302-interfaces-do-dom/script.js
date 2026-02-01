"use strict";
/*
 * 1 - Selecione os elementos com a classe link.
 * 2 - Crie uma função que deve ser executada para cada elemento.
 * 3 - Modificar através da função o estilo da color e border.
 */
function changeLinkStyle(link) {
    link.style.border = "2px solid red";
    link.style.color = "red";
}
const links = document.querySelectorAll(".link");
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        changeLinkStyle(link);
    }
});
