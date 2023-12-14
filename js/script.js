const menu = document.querySelector('.menu');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    mobileNavMenu.classList.toggle('ativo');
})