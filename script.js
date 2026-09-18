/* =========================================================
   NTIM TRAVEL AGENCY
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOADER
    ===================================================== */

    const loader = document.querySelector(".page-loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 500);

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuClose = document.querySelector(".menu-close");


    function openMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.add("open");
        document.body.classList.add("menu-open");

    }


    function closeMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

    }


    /* =====================================================
       HAMBURGER
    ===================================================== */

    if (menuToggle) {

        menuToggle.addEventListener("click", (event) => {

            event.stopPropagation();

            if (mobileMenu.classList.contains("open")) {

                closeMenu();

            } else {

                openMenu();

            }

        });

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (menuClose) {

        menuClose.addEventListener("click", (event) => {

            event.stopPropagation();

            closeMenu();

        });

    }


    /* =====================================================
       CLICK OUTSIDE MENU
    ===================================================== */

    document.addEventListener("click", (event) => {

        if (!mobileMenu) return;

        if (!mobileMenu.classList.contains("open")) {
            return;
        }

        if (mobileMenu.contains(event.target)) {
            return;
        }

        if (
            menuToggle &&
            menuToggle.contains(event.target)
        ) {
            return;
        }

        closeMenu();

    });


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(".mobile-menu nav a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".intro-content, " +
        ".image-feature, " +
        ".service-row, " +
        ".visa-content, " +
        ".photo-item, " +
        ".about-strip-content, " +
        ".contact-cta"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                });

            },

            {
                threshold: 0.12
            }

        );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("revealed");

        });

    }


    /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

    document.querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", function(event) {

                const targetID =
                    this.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetID);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

});