const guideCurrentTitle = document.querySelector('.guide__current-title');
const guideWrapper = document.querySelector('.guide__wrapper');


gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("#scroller-wrapper");

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
if (document.documentElement.clientWidth < 1400 ) {

    window.addEventListener("load", function () {
        let pinBoxes = document.querySelectorAll(".pin-wrap > *");
        let pinWrap = document.querySelector(".pin-wrap");
        let pinWrapWidth = pinWrap.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - "1140" ;

        gsap.to(".pin-wrap", {
            scrollTrigger: {
                scroller: pageContainer,
                scrub: true,
                trigger: "#sectionPin",
                pin: true,
                start: "top top",
                end: '2000'
            },
            x: -horizontalScrollLength,
            ease: "none"
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

        ScrollTrigger.refresh();
    });

} else if(document.documentElement.clientWidth >= 1400){
    window.addEventListener("load", function () {
        let pinBoxes = document.querySelectorAll(".pin-wrap > *");
        let pinWrap = document.querySelector(".pin-wrap");
        let pinWrapWidth = pinWrap.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - "1320" ;

        gsap.to(".pin-wrap", {
            scrollTrigger: {
                scroller: pageContainer,
                scrub: true,
                trigger: "#sectionPin",
                pin: true,
                start: "top top",
                end: '2000'
            },
            x: -horizontalScrollLength,
            ease: "none"
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

        ScrollTrigger.refresh();
    });
}

window.addEventListener('scroll', function() {
    if(window.scrollY > contactsPosition - 140){
        guideCurrentTitle.innerHTML = 'Наши&nbsp;контакты';
        guideWrapper.classList.add('active');
    }else if(window.scrollY > feedbackPosition){
        guideCurrentTitle.innerHTML = 'Ваш проект';
        guideWrapper.classList.remove('active');
    }else{
        guideCurrentTitle.innerHTML = 'belleyou';
    }
});

scroller.on('scroll', (args) => {
    if(typeof args.currentElements['header'] === 'object') {
        let progress = args.currentElements['header'].progress;
        if(progress >= 0){
            guideCurrentTitle.innerHTML = 'belleyou';
        }else{
            guideCurrentTitle.innerHTML = 'Ваш проект';
        }
    }else if(typeof args.currentElements['feedback'] === 'object'){
        let progress = args.currentElements['feedback'].progress;
        if(progress >= 0.1){
            guideCurrentTitle.innerHTML = 'Ваш проект';
            guideWrapper.classList.remove('active');
        }else{
            guideCurrentTitle.innerHTML = 'belleyou';
        }
    }
    else if(typeof args.currentElements['contacts'] === 'object'){
        let progress = args.currentElements['contacts'].progress;
        if(progress > 0.1){
            guideCurrentTitle.innerHTML = 'Наши&nbsp;контакты';
            guideWrapper.classList.add('active');
        }else{
            guideCurrentTitle.innerHTML = 'Ваш проект';
            guideWrapper.classList.remove('active');
        }
    }
});