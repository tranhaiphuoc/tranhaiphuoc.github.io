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