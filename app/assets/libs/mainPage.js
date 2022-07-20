const direction = document.querySelector('.direction__pagination');
const directionSlideNumber = document.querySelector('.direction__slide-number')
const whoAreWe = document.querySelector('#who-are-we');
const whatAreWeDoing = document.querySelector('#what-are-we-doing');
const workProcess = document.querySelector('#work-process');
const ourTeam = document.querySelector('#our-team');
const ourClients = document.querySelector('#our-clients');
const startButton = document.querySelector('.start-button');
const ourCasesPosition = document.querySelector('#our-cases').offsetTop;
const directionPosition = document.querySelector('#direction').offsetTop;
const howWeWorkPosition = document.querySelector('#how-we-work').offsetTop;
const teamPosition = document.querySelector('#team').offsetTop;
const ourClientsPosition = document.querySelector('.our-clients').offsetTop;
const feedbackPosition = document.querySelector('#feedback').offsetTop;
const contactsPosition = document.querySelector('#contacts').offsetTop;
const guideCurrentNumber = document.querySelector('.guide__current-number');
const guideCurrentTitle = document.querySelector('.guide__current-title');
const guideWrapper = document.querySelector('.guide__wrapper');
const directionSlide = document.querySelectorAll('.direction__animation');


new Splide('.splide',{
    arrows: false,
    pagination: true,
    speed: 1,
    easing: 0,
    classes: {
        pagination: 'splide__pagination direction__pagination col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5',
    },
}).mount();

let mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        let directionActive = document.querySelector('.splide__pagination__page.is-active');
        directionSlideNumber.innerHTML = directionActive.ariaLabel;
        directionSlide.forEach( slide =>{
            slide.style.opacity = '0';
            slide.style.pointerEvents = 'none';
        });
        setTimeout(function() {
            directionSlide.forEach( slide =>{
                slide.style.opacity = '1';
                slide.style.pointerEvents = 'auto';
            });
        }, 500);
    });
});

mutationObserver.observe(direction, {
    attributes: true,
    subtree: true,
});

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

window.addEventListener('scroll', function() {
    if(window.scrollY > contactsPosition){
        guideCurrentNumber.innerHTML = '8';
        guideCurrentTitle.innerHTML = 'Наши&nbsp;контакты';
        guideWrapper.classList.add('active');
    }else if(window.scrollY > feedbackPosition){
        guideCurrentNumber.innerHTML = '7';
        guideCurrentTitle.innerHTML = 'Ваш проект';
        guideWrapper.classList.remove('active');
    }else if(window.scrollY > ourClientsPosition){
        guideCurrentNumber.innerHTML = '6';
        guideCurrentTitle.innerHTML = 'Наши клиенты';
    }else if(window.scrollY > teamPosition){
        guideCurrentNumber.innerHTML = '5';
        guideCurrentTitle.innerHTML = 'Команда';
    }else if(window.scrollY > howWeWorkPosition){
        guideCurrentNumber.innerHTML = '4';
        guideCurrentTitle.innerHTML = 'Процесс работы';
    }else if(window.scrollY > directionPosition){
        guideCurrentNumber.innerHTML = '3';
        guideCurrentTitle.innerHTML = 'что мы делаем';
    }else if(window.scrollY > ourCasesPosition){
        guideCurrentNumber.innerHTML = '2';
        guideCurrentTitle.innerHTML = 'Наши кейсы';
    }else{
        guideCurrentNumber.innerHTML = '1';
        guideCurrentTitle.innerHTML = 'Кто мы';
    }
});


gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("#scroller-wrapper");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
    let pinBoxes = document.querySelectorAll(".pin-wrap > *");
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    // Pinning and horizontal scrolling

    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scroller: pageContainer, //locomotive-scroll
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
    });

    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
});
