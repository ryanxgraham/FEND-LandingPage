/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = getElementsByTagName('section');
const navContainer = getElementsByClassName('navbar__menu');
const navList = getElementById('navbar__list');
const navAnchor = getElementsByTagName('a');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function insNavLink(navLinkName, sectionId) {
    const htmlToAdd = <li><a href="#{sectionId}" class="menu__link">${navLinkName}</a></li>;

    navList.insertAdjacentHTML("beforeend", htmlToAdd);
}
function topSectionInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <=
            o.4*(window.innerHeight || document.documentElement.clientHeight)
    );
}

//taken from https://muffinman.io/javascript-get-element-offset/
function getElementOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
    };
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav(sections) {
    for (const section of sections) {
        let navLinkName = section.getAttribute("data-nav");
        let sectionId = section.getAttribute("id");
        insNavLink(navLinkName, sectionId);
    }
}

// Add class 'active' to section when near top of viewport
function setSectionToActive(sections) {
    for (const section of sections) {
        const activeLink = document.querySelector(
            a[href="#${section.getAttribute("id")}"]
        );
        if (topSectionInViewport(section)) {
            section.classList.add("active");
            activeLink.classList.add("menu__link--active")
        } else {
            section.classList.remove("active");
            activeLink.classList.remove("menu__link--active")
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scroll(el) {
    window.scrollTO({
        top: getElementOffset(el).top - nav.offsetHeight,
        left: getElementOffset(el).left,
        behavior: "smooth"
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
