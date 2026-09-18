 /* =========================================================
   NTIM TRAVEL AGENCY
   CONTACT PAGE JAVASCRIPT
   ========================================================= */


/* =========================================================
   PAGE LOADER
   ========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("pageLoader");

    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 500);

});


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

const siteHeader = document.getElementById("siteHeader");

function handleHeaderScroll() {

    if (!siteHeader) return;

    if (window.scrollY > 30) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

function openMenu() {

    if (!menuToggle || !mobileNav) return;

    menuToggle.classList.add("open");
    mobileNav.classList.add("open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");

    document.body.classList.add("menu-open");
}


function closeMenu() {

    if (!menuToggle || !mobileNav) return;

    menuToggle.classList.remove("open");
    mobileNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");

    document.body.classList.remove("menu-open");
}


function toggleMenu() {

    if (!mobileNav) return;

    if (mobileNav.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }

}


if (menuToggle) {

    menuToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        toggleMenu();

    });

}


/* =========================================================
   CLOSE MENU WHEN LINK IS CLICKED
   ========================================================= */

if (mobileNav) {

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });

}


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!mobileNav || !menuToggle) return;

    const menuIsOpen = mobileNav.classList.contains("open");

    if (!menuIsOpen) return;

    const clickedInsideMenu =
        mobileNav.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
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
   CLOSE MENU WHEN WINDOW GETS WIDER
   ========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {
        closeMenu();
    }

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
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
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   CONTACT ITEM STAGGER
   ========================================================= */

const contactItems =
    document.querySelectorAll(".contact-item");


contactItems.forEach((item, index) => {

    item.style.transitionDelay =
        `${index * 80}ms`;

});


/* =========================================================
   WHATSAPP ENQUIRY FORM
   ========================================================= */

const enquiryForm =
    document.getElementById("enquiryForm");


if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const destination =
            document.getElementById("destination").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone || !service || !message) {

            alert(
                "Please fill in your name, phone number, service and message."
            );

            return;

        }


        /* ================================================
           CREATE WHATSAPP MESSAGE
        ================================================= */

        let whatsappMessage =
`Hello Ntim Travel Agency,

I would like to make a travel enquiry.

Name: ${name}

Phone: ${phone}`;

        
        if (email) {

            whatsappMessage +=
`\n\nEmail: ${email}`;

        }


        if (destination) {

            whatsappMessage +=
`\n\nDestination: ${destination}`;

        }


        whatsappMessage +=
`\n\nService Needed: ${service}

Message:
${message}

Thank you.`;


        /* ================================================
           ENCODE MESSAGE
        ================================================= */

        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        /* ================================================
           WHATSAPP NUMBER
        ================================================= */

        const whatsappNumber =
            "233550758015";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        /* ================================================
           OPEN WHATSAPP
        ================================================= */

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        /* ================================================
           OPTIONAL RESET
        ================================================= */

        enquiryForm.reset();

    });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElements =
    document.querySelectorAll("[data-year]");


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   BUTTON FEEDBACK
   ========================================================= */

const submitButton =
    document.querySelector(".submit-button");


if (submitButton) {

    submitButton.addEventListener("click", () => {

        console.log(
            "Preparing Ntim Travel Agency WhatsApp enquiry..."
        );

    });

}


/* =========================================================
   INITIAL MESSAGE
   ========================================================= */

console.log(
    "Ntim Travel Agency Contact Page Loaded."
);