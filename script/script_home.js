// header

const headerFixed = this.document.querySelector('.header-fixed');
const headerUnfixed = this.document.querySelector('.header-unfixed');
const scrollTop = document.querySelector('.scroll-top');

var oldSrollValue = 0;
window.addEventListener('scroll', function(){
    var newScrollValue = this.window.pageYOffset;
    if (newScrollValue > oldSrollValue) {
        headerFixed.classList.add('active');
        headerUnfixed.classList.remove('active');
        if (newScrollValue > 100) {
            scrollTop.classList.add('active');
        }
    } else {
        if (newScrollValue < 60) {
            headerUnfixed.classList.add('active');
            headerFixed.classList.remove('active');
            scrollTop.classList.remove('active');
        }
    }

    oldSrollValue = newScrollValue;
});

// xử lí bấm nút scroll to top

scrollTop.addEventListener('click', function() {
    window.scrollTo(0,0);
});

// header search input

const searchInputs = document.querySelectorAll('.input-search');

function showSearchInputOne(){
    searchInputs[0].classList.toggle('active');
}

function showSearchInputTwo(){
    searchInputs[1].classList.toggle('active');
}

// header hearth

const headerHearths = document.querySelectorAll('.header-search__hearth');

for (let i = 0; i < headerHearths.length; i++) {
    headerHearths[i].onclick = function(){
        for (var headerHearth of headerHearths) {
            headerHearth.style.color = 'red';
        }
    }
}

// show contact box

const contactBtn = document.querySelector('.contact__btn');
const contactBox = document.querySelector('.contact-box');
const contactOverlay = document.querySelector('.contact__overlay');


contactBtn.addEventListener('click', function(){
    contactBox.classList.toggle('open');
    contactOverlay.classList.toggle('open');
});

contactOverlay.addEventListener('click', function(){
    contactBox.classList.toggle('open');
    contactOverlay.classList.toggle('open');
});


// show toast

const toast = document.querySelector('.toast');
const SendMsgBtn = document.querySelector('.btn-send-contact');
const toastCloseBtn = document.querySelector('.toast__close');

SendMsgBtn.addEventListener('click', function(){
    contactBox.classList.toggle('open');
    contactOverlay.classList.toggle('open');
    toast.classList.add('open');

     // tự động remove toast
    
    var setTimeoutId = setTimeout(function(){
        toast.classList.remove('open');
    }, 4000);
});

toastCloseBtn.onclick = function(){
    toast.classList.remove('open');
}

// manager open full bio

const managerLayer = document.querySelector('.manager-info-layer');
const managerBoxText = document.querySelector('.manager-info-absolute');
const managerOpenBoxText = document.querySelector('.manager-full-info');
const managerClose = document.querySelector('.manager-info-absolute__close');

const BtnscloseBoxManager = [managerLayer, managerClose];

managerOpenBoxText.addEventListener('click', function(){
    managerLayer.classList.add('open');
    scrollTop.classList.remove('active');
    setTimeout(function(){
        managerBoxText.classList.add('open');
    }, 500);
});


managerBoxText.addEventListener('click',(e)=>{
    e.stopPropagation();
});

for ( var BtncloseBoxManager of  BtnscloseBoxManager) {
    BtncloseBoxManager.addEventListener('click',()=>{
        managerBoxText.classList.remove('open');
        setTimeout(function(){
            managerLayer.classList.remove('open');
        }, 500);
        scrollTop.classList.add('active');
    });
}

// open contact box moblie screen

const OpenContact = document.querySelector('.js-open-contact');

OpenContact.addEventListener('click', ()=>{
    scrollTop.classList.remove('active');
    setTimeout(function(){
        contactBox.classList.add('open');
        contactOverlay.classList.add('open');
    },500);
});

// get all element in nav moblie

const lisOfNavList = document.querySelector('.nav-list').getElementsByTagName("a");

for (var liOfNavList of lisOfNavList) {
    liOfNavList.addEventListener('click', function(){
        moblieNavOverlay.classList.remove('open');
        moblieNavBox.classList.remove('open');
    });
}

// animaition scroll fadin element
