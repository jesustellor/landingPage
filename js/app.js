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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionList = document.querySelectorAll("div.landing__container");
const ul = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
const sectionLength = sectionList.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

for (let i = 0; i < sectionLength; i++) {
    const a = document.createElement("a");
    a.href = `#${sectionList[i].parentElement.id}`;
    const li = document.createElement("li");
    li.textContent = sectionList[i].querySelector("h2").textContent;
    a.appendChild(li);
    a.classList.add("menu__link");
    fragment.appendChild(a);
}

ul.style.cssText = "display: flex; justify-content: space-evenly; align-items: center;";

ul.appendChild(fragment);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function makeActive(){
    const VALUE = 155;    
    for (const section of sectionList) {
        const box = section.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= VALUE && box.bottom >= VALUE) {
            section.parentElement.classList.add("your-active-class");
            const link = document.querySelector(`a[href="#${section.parentElement.id}"]`);
            link.style.cssText = "background: #333; color: #fff; transition: ease 0.3s all;";
        //apply active state on current section and corresponding Nav link
        } else {
            section.parentElement.removeAttribute("class");
            const link = document.querySelector(`a[href="#${section.parentElement.id}"]`);
            link.removeAttribute("style");
        //Remove active state from other section and corresponding Nav link
        }
     }
}

// build the nav



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

ul.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.preventDefault();
        const section = document.querySelector(event.target.parentElement.getAttribute("href"));
        section.scrollIntoView({behavior: "smooth"});
    }
});

window.addEventListener("scroll", makeActive);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

