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

window.addEventListener("load", function () {
    let pinBoxes = document.querySelectorAll(".pin-wrap > *");
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

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


if (document.documentElement.clientWidth >= 576) {
    scroller.on('scroll', (args) => {
        if (typeof args.currentElements['header'] === 'object') {
            if (args.currentElements['header'].progress >= 0) {
                guideCurrentTitle.innerHTML = 'belleyou';
            } else {
                guideCurrentTitle.innerHTML = 'Ваш проект';
            }
        } else if (typeof args.currentElements['feedback'] === 'object') {
            if (args.currentElements['feedback'].progress >= 0.1) {
                guideCurrentTitle.innerHTML = 'Ваш проект';
                guideWrapper.classList.remove('active');
            } else {
                guideCurrentTitle.innerHTML = 'belleyou';
            }
        } else if (typeof args.currentElements['contacts'] === 'object') {
            if (args.currentElements['contacts'].progress > 0.1) {
                guideCurrentTitle.innerHTML = 'Наши&nbsp;контакты';
                guideWrapper.classList.add('active');
            } else {
                guideCurrentTitle.innerHTML = 'Ваш проект';
                guideWrapper.classList.remove('active');
            }
        }
    });
}