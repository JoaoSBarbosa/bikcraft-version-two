const btnMobile = document.getElementById("btn-mobile") as HTMLElement;

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function toggleMenu(event: any) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav") as HTMLElement;
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
