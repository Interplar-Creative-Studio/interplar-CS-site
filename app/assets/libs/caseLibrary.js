const guideCurrentTitle = document.querySelector('.guide__current-title');
const guideWrapper = document.querySelector('.guide__wrapper');
const feedbackPosition = document.querySelector('#feedback').offsetTop;
const contactsPosition = document.querySelector('#contacts').offsetTop;


window.addEventListener('scroll', function() {
    if(window.scrollY > contactsPosition - 140){
        guideCurrentTitle.innerHTML = 'Наши&nbsp;контакты';
        guideWrapper.classList.add('active');
    }else if(window.scrollY > feedbackPosition){
        guideCurrentTitle.innerHTML = 'Ваш проект';
        guideWrapper.classList.remove('active');
    }else{
        guideCurrentTitle.innerHTML = 'наши кейсы';
    }
});

