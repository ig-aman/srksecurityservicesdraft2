/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".navigation");


menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document
    .querySelectorAll('.navigation a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!target) return;

            navigation.classList.remove("open");

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        '.navigation a[href^="#"]'
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(section => {

    observer.observe(section);

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .why-card, .stat, .about-content, .about-visual, .contact-info, .contact-form"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            formMessage.textContent =
                "Thank you! Your inquiry has been received.";

            contactForm.reset();

        }
    );

}