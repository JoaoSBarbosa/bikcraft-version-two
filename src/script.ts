const btnMobile = document.getElementById('btn-mobile') as HTMLElement;

btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(){
  const nav = document.getElementById('nav') as HTMLElement;
  nav.classList.toggle('active');
}