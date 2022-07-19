const preHeader = document.querySelector('.pre-header')
const preHeaderText = document.querySelector('.pre-header__content-text');
const menuBurger = document.querySelector('.menu__button-mobile');
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')
const backButton = document.querySelector('.back-button');

setTimeout(function() {
    preHeaderText.classList.add('pre-header__content-text-active');
}, 1);
setTimeout(function() {
    preHeader.classList.add('pre-header-hide');

}, 1);
setTimeout(function() {
    preHeader.style.display = "none";
}, 1);

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

    if (!itsMenu && !itsBurger && menuIsActive && !itsButton) {
        menu.classList.toggle('menu-active');
    }
});
menuLink.forEach(link =>{
    link.addEventListener('click',() =>{
        menu.classList.remove('menu-active');
    })
})


const isTouchDevice = 'ontouchstart' in document.documentElement;
disableScroll();
if (!isTouchDevice) smoothScroll();
window.onresize = () => {
    resizeBodyHeight();
};
window.onload = () => {
    enableScroll();
    resizeBodyHeight();
};
// Functions
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
function enableScroll() {
    document.body.style.overflow = '';
}
function smoothScroll() {
    document.querySelector('#app').classList.add('SmoothScroll');
    new SmoothScroll({
        target: document.querySelector('#scroller-wrapper'),
        scrollEase: 0.08,
        maxOffset: 500,
    });
}
function resizeBodyHeight() {
    document.body.style.height = document.querySelector('#app').scrollHeight + 'px';
}

backButton.addEventListener('click', () => {
    window.scroll(0, 0);
})




