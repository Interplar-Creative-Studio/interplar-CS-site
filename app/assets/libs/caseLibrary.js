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

if (document.documentElement.clientWidth >= 576) {
    scroller.on('scroll', (args) => {
        if (typeof args.currentElements['cases-main'] === 'object') {
            if (args.currentElements['cases-main'].progress >= 0) {
                guideCurrentTitle.innerHTML = 'наши кейсы';
            } else {
                guideCurrentTitle.innerHTML = 'Ваш проект';
            }
        } else if (typeof args.currentElements['feedback'] === 'object') {
            if (args.currentElements['feedback'].progress >= 0.1) {
                guideCurrentTitle.innerHTML = 'Ваш проект';
                guideWrapper.classList.remove('active');
            } else {
                guideCurrentTitle.innerHTML = 'наши кейсы';
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