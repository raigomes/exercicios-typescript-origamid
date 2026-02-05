// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: "iniciante" | "avancado";
}

function isCurso(data: unknown): data is Curso {
  if (
    data &&
    typeof data === "object" &&
    "nome" in data &&
    "horas" in data &&
    "tags" in data
  ) {
    return true;
  } else {
    return false;
  }
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.map((item) => {
      if (isCurso(item)) {
        document.body.innerHTML += `
          <h2>${item.nome}</h2>
          <p>${item.horas} horas</p>
          <p>${item.gratuito ? "Gratuito" : "Pago"}</p>
          <p>Nível: ${item.nivel}</p>
          <p>Tags: ${item.tags.join(", ")}</p>
          <p>Aulas: ${item.idAulas.join(", ")}</p>
        `;
      }
    });
  }
}
