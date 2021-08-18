// variables
const domSelectors = {
    navMenu: "nav-menu",
    navClose: "nav-close",
    navToggle: "nav-toggle",
    navLink: ".nav__link",
};

const classes = {
    showMenu: "show-menu",
};

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById(domSelectors.navMenu),
    navClose = document.getElementById(domSelectors.navClose),
    navToggle = document.getElementById(domSelectors.navToggle);

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add(classes.showMenu);
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove(classes.showMenu);
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(domSelectors.navLink);

function hideMenu() {
    navMenu.classList.remove(classes.showMenu);
}
navLinks.forEach((link) => link.addEventListener("click", hideMenu));

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*==================== SHOW SCROLL UP ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
