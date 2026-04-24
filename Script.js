document.addEventListener("DOMContentLoaded", () => {

    // Page fade-in effect
    document.body.style.opacity = 0;
    document.body.style.transition = "1s";

    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

});

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

function revealOnScroll() {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const text = "Software Engineering Student | Future Full Stack Developer | Problem Solver";
let i = 0;

function typeEffect() {
    document.querySelector(".typing").innerHTML = text.slice(0, i);
    i++;

    if (i > text.length) {
        i = 0;
    }

    setTimeout(typeEffect, 100);
}

typeEffect();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
});

function openImg(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeImg() {
    document.getElementById("lightbox").style.display = "none";
}
