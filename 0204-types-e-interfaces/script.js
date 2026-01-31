"use strict";
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <p>Descrição: ${data.descricao}</p>
      <p>Garantia: ${data.garantia} anos</p>
      <p>Tem seguro: ${data.seguroAcidentes ? "sim" : "não"}</p>

      <h3>Fabricante</h3>
      <p>Nome: ${data.empresaFabricante.nome}</p>
      <p>Fundação: ${data.empresaFabricante.fundacao}</p>
      <p>País: ${data.empresaFabricante.pais}</p>

      <h3>Montadora</h3>
      <p>Nome: ${data.empresaMontadora.nome}</p>
      <p>Fundação: ${data.empresaMontadora.fundacao}</p>
      <p>País: ${data.empresaMontadora.pais}</p>
    </div>
  `;
}
