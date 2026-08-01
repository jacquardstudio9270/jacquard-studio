// Disable browser scroll restoration
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

console.log("Jacquard Studio Loaded Successfully");

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

console.log("Jacquard Studio Loaded Successfully");
// Back To Top

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    }else{

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

});
//=============================
// Mobile Navigation
//=============================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});
//=============================
// Scroll Reveal
//=============================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);
//=============================
// Active Navigation
//=============================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function activeMenu(){

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);

window.addEventListener("load", activeMenu);
//=============================
// Sticky Header
//=============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});