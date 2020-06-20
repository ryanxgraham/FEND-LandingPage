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
const sections = document.getElementsByTagName('section');
const navContainer = document.getElementsByClassName('navbar__menu');
const navList = document.querySelector("#navbar__list");
const navAnchor = document.getElementsByTagName('a');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//function to add a nav link to a list item
function insNavLink(navLinkName, sectionId) {
    const htmlToAdd = `<li><a href="#${sectionId}" class="menu__link">${navLinkName}</a></li>`;

    navList.insertAdjacentHTML("beforeend", htmlToAdd);
}
//function to determine if the top of a section is in the viewport
function topSectionInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <=
            0.4*(window.innerHeight || document.documentElement.clientHeight)
    );
}

//function to get element coordinates taken from https://muffinman.io/javascript-get-element-offset/
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
            `a[href="#${section.getAttribute("id")}"]`
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
    window.scrollTo({
        top: getElementOffset(el).top - navList.offsetHeight,
        left: getElementOffset(el).left,
        behavior: "smooth"
    });
}

// create return to top button
function createReturnToTop() {
    const htmlToAdd = '<a href="#" class="bottom__link hide">To Top</a>';
    document.body.insertAdjacentHTML('afterbegin', htmlToAdd);
}

// add button to DOM
function showToTop() {
    const btn = document.querySelector(".bottom__link");
    if (window.pageYOffset <= 0.6 * window.innerHeight) {
        btn.classList.add('hide');
    } else {
        btn.classList.remove('hide');
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
}

function hideNav(delay) {
    var timer;
    timer && clearTimeout(timer);
    navList.classList.add("hide");
    timer = setTimeout(function() {
        navList.classList.remove("hide");
        }, delay);
}
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener("DOMContentLoaded", function() {
    buildNav(sections);
    createReturnToTop();

// Scroll to section on link click
    navList.addEventListener("click", function(e) {
        if (e.target.nodeName === "A") {
            e.preventDefault();
            const activeSection = document.querySelector(
                `section[id = ${e.target.getAttribute("href").slice(1)}]`
            );
            scroll(activeSection);
        }
    });
// Set sections as active
    setTimeout(
        window.addEventListener("scroll", function() {
            setSectionToActive(sections);
            hideNav(1000);
            showToTop();
        }),
        2000
    );
});
