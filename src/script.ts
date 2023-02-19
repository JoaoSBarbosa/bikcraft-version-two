const btnMobile = document.getElementById('btn-mobile') as HTMLElement;

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


function toggleMenu(event: any){
  if(event.type === 'touchstart'){
    event.preventDefault();
  }
  const nav = document.getElementById('nav') as HTMLElement;
  nav.classList.toggle('active');
}