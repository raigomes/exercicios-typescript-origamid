/*
 * Descrição: Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
 *
 * Estado dos elementos
 *
 * menu inativo:
 * class="" em nav
 * aria-expanded="false" em button
 * aria-label="Abrir Menu" em button
 *
 * menu ativo:
 * class="active" em nav
 * aria-expanded="true" em button
 * aria-label="Fechar Menu" em button
 */

const btnMobile = document.getElementById("btn-mobile");
btnMobile?.addEventListener("pointerdown", (event: PointerEvent) => {
  const nav = document.getElementById("nav");
  const button = event.target;
  nav?.classList.toggle("active");

  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");
    button.ariaLabel = active ? "Fechar Menu" : "Abrir Menu";
    button.ariaExpanded = active ? "true" : "false";
  }
});
