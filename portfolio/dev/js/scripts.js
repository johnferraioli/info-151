import AOS from 'aos';
import { gsap } from "gsap";
import 'aos/dist/aos.css';

AOS.init({
    duration: 500,
    once: false,
});

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});

document.addEventListener("DOMContentLoaded", () => {
    const linkedinBtn = document.getElementById("linkedin-btn");
    if (linkedinBtn) {
        const gifIcon = linkedinBtn.querySelector(".gif-icon");
        const stillSrc = "img/linkedin.png";
        const gifSrc = "img/linkedin.gif";

        gifIcon.src = stillSrc;

        linkedinBtn.addEventListener("mouseenter", () => {
            gifIcon.src = gifSrc;
        });

        linkedinBtn.addEventListener("mouseleave", () => {
            gifIcon.src = stillSrc;
        });
    }

    gsap.from("#home h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("#home h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from("#home p", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
    });

    // Burger Menu Logic
    const menuButton = document.getElementById("menu-button");
    const closeBarBtn = document.getElementById("close-bar-btn");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", function () {
        navMenu.classList.add("menu--open");
        menuButton.style.display = "none";
        closeBarBtn.style.display = "inline-block";
    });

    closeBarBtn.addEventListener("click", function () {
        navMenu.classList.remove("menu--open");
        menuButton.style.display = "inline-block";
        closeBarBtn.style.display = "none";
    });
});
