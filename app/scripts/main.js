const preHeader = document.querySelector('.pre-header')
const preHeaderText = document.querySelector('.pre-header__content-text');
const menuBurger = document.querySelector('.menu__button-mobile');
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')
const pageBody = document.querySelector(':root')

setTimeout(function() {
    preHeaderText.classList.add('pre-header__content-text-active');
}, 2000);
setTimeout(function() {
    preHeader.classList.add('pre-header-hide');
    pageBody.style.overflowY = "scroll";
}, 4000);
setTimeout(function() {
    preHeader.style.display = "none";
}, 5000);

menuBurger.addEventListener('click',() =>{
    menu.classList.toggle('menu-active');
});
menuButton.addEventListener('click',() =>{
    menu.classList.toggle('menu-active');
});
document.addEventListener( 'click', (e) => {
    let target = e.target;
    let itsMenu = target === menu || menu.contains(target)
    let itsBurger = target === menuBurger;
    let itsButton = target === menuBurger;
    let menuIsActive = menu.classList.contains('menu-active');

    if (!itsMenu && !itsBurger && menuIsActive) {
        menu.classList.toggle('menu-active');
    }
});
menuLink.forEach(link =>{
    link.addEventListener('click',() =>{
        menu.classList.remove('menu-active');
    })
})