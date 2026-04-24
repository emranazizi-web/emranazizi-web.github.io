document.addEventListener("DOMContentLoaded", () => {

    // Fade-in effect
    document.body.style.opacity = 0;
    document.body.style.transition = "1s ease";

    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

    // Cursor effect
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    // Typing effect
    const text = "Software Engineering Student | Future Full Stack Developer | Problem Solver";
    let i = 0;

    function typeEffect() {
        const el = document.querySelector(".typing");
        if (!el) return;

        el.innerHTML = text.slice(0, i);
        i++;

        if (i > text.length) {
            i = 0;
        }

        setTimeout(typeEffect, 100);
    }

    typeEffect();

    // Reveal animation (ONLY ONE SYSTEM - FIXED)
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 120) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

});

// Lightbox (FIXED - NO DUPLICATES)
function openImg(img) {
    const box = document.getElementById("lightbox");
    const boxImg = document.getElementById("lightbox-img");

    if (!box || !boxImg) return;

    box.style.display = "flex";
    boxImg.src = img.src;
}

function closeImg() {
    const box = document.getElementById("lightbox");
    if (box) {
        box.style.display = "none";
    }
}

window.addEventListener("load", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        el.classList.add("active");
    });
});
