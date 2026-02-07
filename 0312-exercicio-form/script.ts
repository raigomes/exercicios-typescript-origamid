// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

const form = document.querySelector<HTMLElement>("#form");
form?.addEventListener("keyup", handleKeyUp);

function handleKeyUp(event: KeyboardEvent) {
  const input = event.target;

  if (input instanceof HTMLInputElement) {
    const key = input.id;
    const value = input.value;

    window.UserData[key] = value;
    window.localStorage.setItem("UserData", JSON.stringify(window.UserData));
  }
}

//User Type Guard
function isUserData(value: unknown): value is UserData {
  if (
    value &&
    typeof value === "object" &&
    ("nome" in value || "email" in value || "cpf" in value)
  ) {
    return true;
  } else {
    return false;
  }
}

function validJSON(data: string) {
  try {
    JSON.parse(data);
    return true;
  } catch {
    return false;
  }
}

function init() {
  const data = window.localStorage.getItem("UserData");
  if (data && validJSON(data)) {
    const userData = JSON.parse(data);
    if (isUserData(userData)) {
      window.UserData = userData;
      Object.entries(userData).forEach(([key, value]) => {
        const field = document.getElementById(key);
        if (field instanceof HTMLInputElement) {
          field.value = value;
        }
      });
    }
  }
}

init();
