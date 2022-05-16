let toggleNavbarStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".navbar-right");

    if (toggleNavbarStatus === false) {
        getSidebar.style.right = "0%";
    }

    toggleNavbarStatus = true;
}