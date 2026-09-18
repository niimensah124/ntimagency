/* =========================================================
   NTIM TRAVEL AGENCY
   SERVICES PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("pageLoader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 350);
    }

});



/* =========================================================
   HEADER
========================================================= */

const header = document.getElementById("siteHeader");


function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}


window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
);


handleHeaderScroll();



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");


function openMobileMenu() {

    if (!menuToggle || !mobileNav) return;

    mobileNav.classList.add("active");
    menuToggle.classList.add("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

}


function closeMobileMenu() {

    if (!menuToggle || !mobileNav) return;

    mobileNav.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


function toggleMobileMenu(event) {

    event.stopPropagation();

    if (
        mobileNav &&
        mobileNav.classList.contains("active")
    ) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

}



/* =========================================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================================= */

if (mobileNav) {

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });

}



/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (!mobileNav || !menuToggle) return;

    const clickedInsideMenu =
        mobileNav.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (
        mobileNav.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedToggle
    ) {
        closeMobileMenu();
    }

});



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMobileMenu();
    }

});



/* =========================================================
   CLOSE MENU ON RESIZE
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {
        closeMobileMenu();
    }

});



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const headerHeight =
            header
                ? header.offsetHeight
                : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "visible"
                );

                revealObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================================
   SERVICE ITEM STAGGER
========================================================= */

const serviceDetails =
    document.querySelectorAll(
        ".service-detail"
    );


serviceDetails.forEach(
    (item, index) => {

        item.style.transitionDelay =
            `${index * 70}ms`;

    }
);



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-year]"
    );


yearElements.forEach((element) => {

    element.textContent =
        new Date().getFullYear();

});