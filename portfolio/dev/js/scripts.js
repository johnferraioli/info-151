import AOS from 'aos';
import { gsap } from "gsap";
import 'aos/dist/aos.css';
// ..
AOS.init({
    duration: 500,
    once: false,
});

document.addEventListener("DOMContentLoaded", () => {
    const linkedinBtn = document.getElementById("linkedin-btn");
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
});

document.addEventListener("DOMContentLoaded", () => {
    // Animate the home section text on page load
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
});
