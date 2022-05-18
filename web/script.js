document.querySelector('.toggle-nav').addEventListener('click', openNav);

function openNav() {
    document.querySelector('.side-nav').style.opacity = '1';
    document.querySelector('.side-nav').style.right = '0%';

    let div = document.createElement('div');
    div.id = 'overlay'
    div.onclick = function closeNav() {
        document.querySelector('.side-nav').style.opacity = '0';
        document.querySelector('.side-nav').style.right = '-100%';

        document.getElementById('overlay').remove();
    };
    document.body.appendChild(div);
}

function collapseSideNav() {
    if (window.innerWidth > 850) {
        document.querySelector('.side-nav').style.display = 'none';
        document.querySelector('#overlay').style.display = 'none';
    }
    else {
        document.querySelector('.side-nav').style.display = 'block';
        document.querySelector('#overlay').style.display = 'block';
    }
}

window.addEventListener('resize', collapseSideNav);