const preHeader = document.querySelector('.pre-header')
const preHeaderText = document.querySelector('.pre-header__content-text');

setTimeout(function() {
    preHeaderText.classList.add('pre-header__content-text-active');
}, 2000);
setTimeout(function() {
    preHeader.classList.add('pre-header-hide');
}, 5000);
setTimeout(function() {
    preHeader.style.display = "none";
}, 7000);