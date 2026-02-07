// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface DescricaoVenda {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, DescricaoVenda];

async function getVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  somarVendas(data);
}

getVendas();

function somarVendas(vendas: Venda[]) {
  let total = 0;

  vendas.forEach((item) => {
    total += item[1];
  });

  document.body.innerHTML = `<p>Total: R$ ${total}</p>`;
}
