const direction = document.querySelector('.direction__pagination');
const directionSlideNumber = document.querySelector('.direction__slide-number')
const preHeader = document.querySelector('.pre-header')
const preHeaderText = document.querySelector('.pre-header__content-text');
const menuBurger = document.querySelector('.menu__button-mobile');
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')


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
new Splide('.splide',{
    arrows: false,
    pagination: true,
    wheel: true,
    speed: 2000,
    classes: {
        pagination: 'splide__pagination direction__pagination col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5',
    },
}).mount();


let mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        let directionActive = document.querySelector('.splide__pagination__page.is-active');
        directionSlideNumber.innerHTML = directionActive.ariaLabel;
    });
});
mutationObserver.observe(direction, {
    attributes: true,
    subtree: true,
});


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
const backButton = document.querySelector('.back-button');
const whoAreWe = document.querySelector('#who-are-we');
const whatAreWeDoing = document.querySelector('#what-are-we-doing');
const workProcess = document.querySelector('#work-process');
const ourTeam = document.querySelector('#our-team');
const ourClients = document.querySelector('#our-clients');
const startButton = document.querySelector('.start-button');
backButton.addEventListener('click', () => {
    window.scroll(0, 0);
})

whoAreWe.addEventListener('click', () => {
    window.scroll(0, document.querySelector('#about-us').offsetTop);
})
whatAreWeDoing.addEventListener('click', () => {
    window.scroll(0, (document.querySelector('.our-cases__description').offsetTop) - 20);
})
workProcess.addEventListener('click', () => {
    window.scroll(0, (document.querySelector('#direction').offsetTop) - 20);
})
ourTeam.addEventListener('click', () => {
    window.scroll(0, (document.querySelector('.team-tittle').offsetTop) - 20);
})
ourClients.addEventListener('click', () => {
    window.scroll(0, (document.querySelector('.our-clients__title').offsetTop) - 20);
})
startButton.addEventListener('click', () => {
    window.scroll(0, (document.querySelector('.feedback__title').offsetTop) - 20);
})
