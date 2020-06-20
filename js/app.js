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

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
