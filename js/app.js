const menuToggleButton = document.querySelector('.menu-toggle-button')
const menuOpenButton = document.querySelector('.menu-open');
const menuCloseButton = document.querySelector('.menu-close');
const navbar = document.querySelector('nav');

menuToggleButton.addEventListener('click', toggleMobileNav);

function toggleMobileNav() {
    const state = getComputedStyle(navbar).display;;

    if(state === 'block') {
        navbar.classList.remove('show');
        menuOpenButton.classList.remove('d-none');
        menuCloseButton.classList.remove('show');
    } else if(state === 'none' || state === '') {
        navbar.classList.add('show');
        menuOpenButton.classList.add('d-none');
        menuCloseButton.classList.add('show');
    }
}