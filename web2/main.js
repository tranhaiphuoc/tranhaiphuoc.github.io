//Toggle the side-navigation bar.
var sideNav = document.querySelector('.side-nav');

document.querySelector('.toggle').addEventListener('click', openNav);

function openNav() {
    sideNav.classList.add('active');

    let div = document.createElement('div');
    div.id = 'overlay';
    div.onclick = function closeNav() {
        sideNav.classList.remove('active');
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


//Hide side-navigation bar when the width's condition is met
var overlay = document.getElementById('overlay');

function collapseSideNav() {
    if (window.innerWidth > 1200) {
        sideNav.style.display = 'none';
        overlay.style.display = 'none';
    }
    else {
        sideNav.style.display = 'block';
        overlay.style.display = 'block';
    }
}

window.addEventListener('resize', collapseSideNav);
