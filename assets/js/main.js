// variables
const domSelectors = {
    navMenu: "nav-menu",
    navClose: "nav-close",
    navToggle: "nav-toggle",
    navLink: ".nav__link",
    header: "header",
    scrollUp: "scroll-up",
    sections: "section[id]",
};

const classes = {
    showMenu: "show-menu",
    scrollHeader: "scroll-header",
    showScrollUp: "show-scrollup",
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
function changeHeaderBackground() {
    const header = document.getElementById(domSelectors.header);
    if (window.scrollY > 50) header.classList.add(classes.scrollHeader);
    else header.classList.remove(classes.scrollHeader);
}

window.addEventListener("scroll", changeHeaderBackground);

/*==================== SHOW SCROLL UP ====================*/
const scrollUp = document.getElementById(domSelectors.scrollUp);

const showScrollUp = () => {
    if (this.scrollY > 50) scrollUp.classList.add(classes.showScrollUp);
    else scrollUp.classList.remove(classes.showScrollUp);
};

window.addEventListener("scroll", showScrollUp);

/*==================== MOVE TO TOP ====================*/
const moveToTop = () => {
    window.scrollTo(0, 0);
};

scrollUp.addEventListener("click", moveToTop);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// select all sections which have id
const sections = document.querySelectorAll(domSelectors.sections);

const showActiveLink = () => {
    const currentScollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        if (currentScollY > sectionTop && currentScollY <= sectionHeight + sectionTop) {
            document
                .querySelector(`.nav__menu a[href="#${sectionId}"]`)
                .classList.add("active-link");
        } else {
            document
                .querySelector(`.nav__menu a[href="#${sectionId}"]`)
                .classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", showActiveLink);
