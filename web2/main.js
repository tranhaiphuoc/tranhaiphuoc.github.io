// Fixed navbar after scrolling pass the banner
const mobileWidth = window.matchMedia("(min-width: 1200px)");
const navbar = document.querySelector('.navbar');
const banner = document.querySelector('.banner');
let isOnBanner;

const bannerOption = {};

const bannerObeserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (mobileWidth.matches) {
            if (entry.isIntersecting) {
                navbar.classList.remove('shadow');
                isOnBanner = true;
            } else {
                navbar.classList.add('shadow');
                isOnBanner = false;
            };
        } else {
            if (entry.isIntersecting) {
                isOnBanner = true;
            } else {
                isOnBanner = false;
            };
        }
    });
}, bannerOption);

bannerObeserver.observe(banner);


// Hide side-navigation bar when the width's condition is met
const collapseMobileNav = () => {
    if (mobileWidth.matches) {
        if (isOnBanner === false) {
            navbar.classList.add('shadow');
        };
        if (document.getElementById('overlay')) {
            document.getElementById('overlay').style.display = 'none';
        };
    } else {
        if (isOnBanner === false) {
            navbar.classList.remove('shadow');
        };
        bannerObeserver.observe(banner);
        if (document.getElementById('overlay')) {
            document.getElementById('overlay').style.display = 'block';
        };
    };
};
window.addEventListener('resize', collapseMobileNav);


// Toggle the side-navigation bar.
const toggleSideNav = document.querySelector('.toggle');
const primaryNav = document.querySelector('.menu');

toggleSideNav.addEventListener('click', () => {
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