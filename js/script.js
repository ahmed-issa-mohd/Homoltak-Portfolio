import translations from './translations.js';
const tabItems = document.querySelectorAll('.tab-item');
const serviceContent = document.querySelector('.service-content');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const privacLink = document.getElementById('privacLink');
const languageSelector = document.querySelector('select');
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let faBars = document.querySelector('.fa-bars');
let header = document.querySelector('header');
let showcase = document.querySelector('.showcase')
let body = document.getElementsByTagName('body')[0];
let service_content = document.querySelector('.service-content');
let btn_tap = document.querySelector('#btn-tap');
let overlay = document.getElementById('overlay');
let headerLinks = document.querySelectorAll('.menu a ');

headerLinks.forEach((item) => {
    item.addEventListener('click', () => {
        faBars.classList.toggle('fa-xmark');
        menu.classList.remove('showMenue');
        overlay.classList.toggle('show')
        menu.classList.add('hidden')
    });
});



// Select tab content item
function selectItem(e) {
    // Remove all show and border classes
    removetabColor();
    removeShow();
    // Add tabColor to current tab item
    this.classList.add('tabColor');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
    serviceContent.classList.add('show');
}
// Remove bottom tabColor from all tab items
function removetabColor() {
    tabItems.forEach((item) => {
        item.classList.remove('tabColor');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach((item) => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach((item) => {
    item.addEventListener('click', selectItem);
});

// back To Top
//Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// preload
$(window).load(function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
});
// Toggle Menu
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    menu.classList.toggle('showMenue');
    faBars.classList.toggle('fa-xmark');
    overlay.classList.toggle('show')
    menu.classList.remove('hidden')


}
document.onclick = function (e) {
    if (
        !menuBtn.contains(e.target) &&
        !menu.contains(e.target) &&
        !header.contains(e.target) &&
        !mybutton.contains(e.target)
    ) {
        faBars.classList.remove('fa-xmark');
        menu.classList.remove('showMenue');
        overlay.classList.remove('show')
        menu.classList.remove('hidden')


    }
};

// change header

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('change');
        showcase.style.top = '25px'
    } else {
        header.classList.remove('change');
        showcase.style.top = '0px'
    }
});
// Translations
document.addEventListener('DOMContentLoaded', () => {
    // location.reload();
    backToTop();
    const language = localStorage.getItem('lang') || 'ar';
    if (language == 'ar') {
        document.dir = 'rtl';
        body.style.fontFamily = '"Cairo", sans-serif';
        privacLink.href = 'PrivacyPolicyAr.html';
        menu.style.right = '-286px';
        document
            .getElementById('siteLanguage')
            .querySelector("[value = 'ar']").selected = 'true';
        var typed = new Typed('#element1', {
            strings: [' <i style="color:orange">حمولتك</i> لنقل البضائع'],
            typeSpeed: 150,
            // loop: true,
            showCursor: false,
            cursorChar: '|',
        });

    } else {
        document.dir = 'ltr';
        body.style.direction = "ltr";
        menu.style.top = '58px';
        menu.style.left = '-286px';
        document
            .getElementById('siteLanguage')
            .querySelector("[value = 'en']").selected = 'true';
        body.style.fontFamily = "'Karla', sans-serif";
        privacLink.href = 'PrivacyPolicyEn.html';
        var typed = new Typed('#element1', {
            strings: [' <i style="color:orange">Homoltak</i>  For Moving Goods'],
            typeSpeed: 150,
            // loop: true,
            showCursor: false,
            cursorChar: '|',
        });

    }
    setLanguage(language);
    $(document).ready(function () {
        if (language == 'ar') {
            $('.showcase-slider').slick({
                arrows: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                rtl: true,
                // fade: true,
            });
            $('.app-text-slider').slick({
                arrows: false,
                speed: 400,
                dots: true,
                // autoplay: 'true ',
                // autoplaySpeed: 6000,
                rtl: true,
                // fade: true,
            });

        } else {
            $('.showcase-slider').slick({
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                ltr: true,
            });
            $('.app-text-slider').slick({
                arrows: false,
                speed: 400,
                dots: true,
                // autoplay: 'true ',
                // autoplaySpeed: 6000,
                ltr: true,
            });
        }
    });
});
languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    localStorage.setItem('lang', event.target.value);
    location.reload();
});
const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationKey];
    });
    // document.dir = language === 'ar' ? 'rtl' : 'ltr'
};







