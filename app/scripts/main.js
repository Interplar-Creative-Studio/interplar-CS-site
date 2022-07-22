const preHeader = document.querySelector('.pre-header')
const preHeaderText = document.querySelector('.pre-header__content-text');
const menuBurger = document.querySelector('.menu__button-mobile');
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')
const backButton = document.querySelector('.back-button');
const popUpButton = document.querySelector('.popUp__button');
const popUp = document.querySelector('.popUp');

setTimeout(function() {
    preHeaderText.classList.add('pre-header__content-text-active');
}, 2000);
setTimeout(function() {
    preHeader.classList.add('pre-header-hide');
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

    if (!itsMenu && !itsBurger && menuIsActive && !itsButton) {
        menu.classList.toggle('menu-active');
    }
});
menuLink.forEach(link =>{
    link.addEventListener('click',() =>{
        menu.classList.remove('menu-active');
    })
})
try {

    popUpButton.addEventListener('click',() =>{
        popUp.style.display = "none";
    });
    document.addEventListener( 'click', (e) => {
        let target = e.target;
        let itsPopUp = target === popUp || popUp.contains(target)
        let itsPopUpButton = target === popUpButton;

        if (!itsPopUp && !itsPopUpButton) {
            popUp.style.display = "none";
        }
    });

} catch (err) {

    // Убрать try catch когда popUp будет настроен

}


backButton.addEventListener('click', () => {
    window.scroll(0, 0);
})

const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

anchorLinks.forEach((anchorLink) => {
    let hashval = anchorLink.getAttribute('href');
    let target = document.querySelector(hashval);

    anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        scroller.scrollTo(target);
    });
});
