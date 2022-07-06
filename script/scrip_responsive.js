// open header nav box

const btnOpenNav = document.querySelector('.js-header-moblie-icon-menu');
const moblieNavOverlay = document.querySelector('.js-header-moblie-nav');
const moblieNavBox = document.querySelector('.js-header-moblie-nav__box');
const btnCloseNav = document.querySelector('.js-header-moblie__close-icon');

btnOpenNav.addEventListener('click', () => {
    moblieNavOverlay.classList.add('open');

    setTimeout(function(){
        moblieNavBox.classList.add('open');
    },200);
});

btnCloseNav.addEventListener('click', () => {
    moblieNavBox.classList.remove('open');
    setTimeout(function(){
        moblieNavOverlay.classList.remove('open');
    },200);
});

moblieNavOverlay.addEventListener('click', () => {
    moblieNavBox.classList.remove('open');
    setTimeout(function(){
        moblieNavOverlay.classList.remove('open');
    },200);
});

moblieNavBox.addEventListener('click', (e) => {
    e.stopPropagation();
});

// hide moblie menu when sroll down

var oldValue = 0;
const headerMoblie = document.querySelector('.js-header-moblie-top');
window.addEventListener('scroll', function(){
    var newValue = this.window.pageYOffset;
    if (newValue > oldValue) {
        headerMoblie.classList.add('appear');
    } else {
        headerMoblie.classList.remove('appear');
    }
    oldValue = newValue;
});

// open search box

const searchBtn = document.querySelector('.js-search-box__icon');
const searchBox = document.querySelector('.js-search-box');

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('open');
});

// scrop down nav ticket mobile

const navTicketsBox = document.querySelector('.js-nav-tickets');
const btnOfNavTicketsBox = document.querySelector('.js-dropdown-nav-moblie');


btnOfNavTicketsBox.addEventListener('click', () => {
    navTicketsBox.classList.toggle('open');
});



const navBox = document.querySelector('.js-header-moblie-nav__box');
const lisOfNav = navBox.querySelectorAll('a[href^="#"]');

for (var liOfNav of lisOfNav) {
    liOfNav.onclick = function () {
        moblieNavOverlay.classList.remove('open');
        moblieNavBox.classList.remove('open');
    }
}