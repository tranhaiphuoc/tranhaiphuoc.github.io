//Toggle the side-navigation bar.
document.querySelector('.toggle').addEventListener('click', openNav);
function openNav() {
    document.querySelector('.side-nav').classList.add('active');

    let div = document.createElement('div');
    div.id = 'overlay';
    div.onclick = function closeNav() {
        document.querySelector('.side-nav').classList.remove('active');
        document.getElementById('overlay').remove();
    }
    document.body.appendChild(div);
}


//Activate the language button.
const langList = document.querySelectorAll('.lang');
langList.forEach(lang => {
    lang.addEventListener('click', function changeLang() {
        if (!this.classList.contains('active')) {
            document.querySelector('.lang.active').classList.remove('active');
            this.classList.add('active');
        }
    });
});


//Activate the navigation links.
const linkNavList = document.querySelectorAll('.nav-link');
linkNavList.forEach(link => {
    link.addEventListener('click', function linkActive() {
        if (!this.classList.contains('active')) {
            document.querySelector('.nav-link.active').classList.remove('active');
            this.classList.add('active');
        }
    });
});


//Activate the side-navigation links.
const linkSideNavList = document.querySelectorAll('.side-nav-link');
linkSideNavList.forEach(sideLink => {
    sideLink.addEventListener('click', function linkActive() {
        if (!this.classList.contains('active')) {
            document.querySelector('.side-nav-link.active').classList.remove('active');
            this.classList.add('active');
        }
    });
});