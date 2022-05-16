document.querySelector('.toggle-nav').addEventListener('click', openNav);

document.querySelector('.logo').addEventListener('click', closeNav);


function openNav() {
    document.querySelector(".navbar-right").style.right = "0%";

    let div = document.createElement('div');
    div.id = 'content';
    document.body.appendChild(div);
}

function closeNav() {
    document.querySelector(".navbar-right").style.right = "-50%";

    var removeDiv = document.getElementById("content");
    removeDiv.remove();
}