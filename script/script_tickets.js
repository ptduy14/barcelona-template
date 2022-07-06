const headerFixed = document.querySelector('.js-header-fixed');
const scrollTop = document.querySelector('.js-scroll-top');
window.addEventListener('scroll', () =>{
    if (window.scrollY > 50) {
        headerFixed.classList.add('active');
        scrollTop.classList.add('active');
    } else {
        headerFixed.classList.remove('active');
        scrollTop.classList.remove('active');
    }
});

scrollTop.onclick = ()=> {
    window.scrollTo(0,0);
}
