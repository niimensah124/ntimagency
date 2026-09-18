/* =========================================================
   NTIM TRAVEL AGENCY
   VISA ASSISTANCE PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("pageLoader");

    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 350);

});



/* =========================================================
   HEADER
========================================================= */

const header = document.getElementById("siteHeader");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


updateHeader();



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileNav =
    document.getElementById("mobileNav");



function openMenu() {

    if (!menuToggle || !mobileNav) return;

    mobileNav.classList.add("active");

    menuToggle.classList.add("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

}



function closeMenu() {

    if (!menuToggle || !mobileNav) return;

    mobileNav.classList.remove("active");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}



function toggleMenu(event) {

    event.stopPropagation();

    if (
        mobileNav &&
        mobileNav.classList.contains("active")
    ) {
        closeMenu();
    } else {
        openMenu();
    }

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMenu
    );

}



/* =========================================================
   CLOSE MENU AFTER LINK CLICK
========================================================= */

if (mobileNav) {

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });

}



/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", (event) => {

    if (!mobileNav || !menuToggle) return;

    const clickedMenu =
        mobileNav.contains(event.target);

    const clickedButton =
        menuToggle.contains(event.target);

    if (
        mobileNav.classList.contains("active") &&
        !clickedMenu &&
        !clickedButton
    ) {
        closeMenu();
    }

});



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeMenu();
    }

});



/* =========================================================
   CLOSE MOBILE MENU ON RESIZE
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {
        closeMenu();
    }

});



/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach((link) => {

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

        const targetTop =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetTop,
            behavior: "smooth"
        });

    });

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

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

                rootMargin:
                    "0px 0px -45px 0px"
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}



/* =========================================================
   DESTINATION ROW INTERACTION
========================================================= */

const destinationRows =
    document.querySelectorAll(
        ".destination-row"
    );


destinationRows.forEach((row) => {

    row.addEventListener(
        "mouseenter",
        () => {
            row.classList.add("hovered");
        }
    );


    row.addEventListener(
        "mouseleave",
        () => {
            row.classList.remove("hovered");
        }
    );

});



/* =========================================================
   STAGGERED FORM ANIMATION
========================================================= */

const formItems =
    document.querySelectorAll(
        ".form-item"
    );


formItems.forEach((item, index) => {

    item.style.transitionDelay =
        `${index * 80}ms`;

});



/* =========================================================
   STAGGERED ASSISTANCE ANIMATION
========================================================= */

const assistanceItems =
    document.querySelectorAll(
        ".assistance-item"
    );


assistanceItems.forEach(
    (item, index) => {

        item.style.transitionDelay =
            `${index * 70}ms`;

    }
);



/* =========================================================
   STAGGERED PROCESS ANIMATION
========================================================= */

const processSteps =
    document.querySelectorAll(
        ".process-step"
    );


processSteps.forEach(
    (step, index) => {

        step.style.transitionDelay =
            `${index * 100}ms`;

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