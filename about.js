/* =========================================================
   NTIM TRAVEL AGENCY
   ABOUT PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");
const mobileLinks = document.querySelectorAll(".mobile-menu nav a");


function openMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.add("active");

    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }

    document.body.style.overflow = "hidden";
}


function closeMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove("active");

    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    document.body.style.overflow = "";
}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (
                mobileMenu &&
                mobileMenu.classList.contains("active")
            ) {
                closeMenu();
            } else {
                openMenu();
            }

        }
    );

}


if (menuClose) {

    menuClose.addEventListener(
        "click",
        function () {

            closeMenu();

        }
    );

}


/* =========================================================
   MOBILE LINK CLOSE
========================================================= */

mobileLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            closeMenu();

        }
    );

});


/* =========================================================
   CLICK OUTSIDE MENU
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (!mobileMenu) return;

        if (!mobileMenu.classList.contains("active")) {
            return;
        }

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedToggle =
            menuToggle &&
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle
        ) {
            closeMenu();
        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mobileMenu &&
            mobileMenu.classList.contains("active")
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(element);

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN RESIZING
========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 900 &&
            mobileMenu &&
            mobileMenu.classList.contains("active")
        ) {

            closeMenu();

        }

    }
);