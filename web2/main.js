//Toggle side-navigation bar.
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


//Active the changing language button.
const langList = document.querySelectorAll('.lang');
langList.forEach(lang => {
    lang.addEventListener('click', function changeLang() {
        if (!this.classList.contains('active')) {
            document.querySelector('.lang.active').classList.remove('active');
            this.classList.add('active');
        }
    });
});