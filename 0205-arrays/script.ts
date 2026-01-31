/*
[
  {
    "nome": "HTML e CSS",
    "horas": 40,
    "aulas": 200,
    "gratuito": false,
    "tags": ["HTML", "CSS", "JavaScript", "Browser"],
    "idAulas": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "nivel": "iniciante"
  },
  {
    "nome": "CSS Flexbox",
    "horas": 20,
    "aulas": 100,
    "gratuito": true,
    "tags": ["display", "flex", "css", "justify-content"],
    "idAulas": [10, 11, 12, 13, 14, 15, 16, 17],
    "nivel": "avancado"
  }
]
*/

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: "iniciante" | "avancado";
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Array<Curso>) {
  document.body.innerHTML = cursos
    .map(
      (curso) => `
      <div>
        <h2 style="color: ${curso.nivel === "iniciante" ? "blue" : "red"};">
          ${curso.nome} - ${curso.horas} horas
        </h2>
        <strong>${curso.gratuito ? "Gratuito" : "Pago"}</strong>
        <p>Aulas: ${curso.idAulas.join(", ")}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Nível: ${curso.nivel}</p>
      </div>
      `,
    )
    .join("<br/>");
}
