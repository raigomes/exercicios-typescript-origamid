/**
 * #### Código original ####
 * 
const input = document.querySelector("input");

const total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector("p");
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem("total", value);
  calcularGanho(value);
}

input.addEventListener("keyup", totalMudou);

 */

// Código corrigido

const input = document.querySelector("input");
const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}
