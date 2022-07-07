// Fixed navbar after scrolling pass the banner
const navbar = document.querySelector('.navbar');
const banner = document.querySelector('.banner');
height = window.getComputedStyle(banner).getPropertyValue('height').replace('px', '');

window.onscroll = () => {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop >= height) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}


// Toggle the side-navigation bar.
const toggle = document.querySelector('.toggle');
const primaryNav = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');


    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
    };

    const div = document.createElement('div');
    div.id = 'overlay';
    div.onclick = () => {
        document.getElementById('overlay').remove();
        primaryNav.setAttribute('data-visible', false);
    };
    document.body.appendChild(div);
});


// Hide side-navigation bar when the width's condition is met
function collapseMobileNav() {
    if (window.innerWidth > 1100) {
        if (document.getElementById('overlay')) {
            primaryNav.style.opacity = '0';
            document.getElementById('overlay').style.display = 'none';
        };
    } else {
        if (document.getElementById('overlay')) {
            primaryNav.style.opacity = '1';
            document.getElementById('overlay').style.display = 'block';
        };
    };
};
window.addEventListener('resize', collapseMobileNav);


// Load external Japan HTML page
function loadJapanHTML() {
    fetch('index.html').then(response=> response.text()).then(text=> document.querySelector('body').innerHTML = text);
}

// Load external English HTML page
function loadEnglishHTML() {
    fetch('eng-index.html').then(response=> response.text()).then(text=> document.querySelector('body').innerHTML = text);
}