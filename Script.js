document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // FADE IN EFFECT
    // =========================
    document.body.style.opacity = 0;
    document.body.style.transition = "1s ease";

    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

    // =========================
    // CURSOR EFFECT
    // =========================
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    // =========================
    // TYPING EFFECT
    // =========================
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

    // =========================
    // REVEAL ON SCROLL (FIXED)
    // =========================
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    // run once immediately
    revealOnScroll();
});


// =========================
// LIGHTBOX
// =========================
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

fetch("projects.json")
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("projects-container");

        if (!container) return;

        data.forEach(project => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <small><b>Tech:</b> ${project.tech}</small>
            `;

            container.appendChild(card);
        });

    })
    .catch(err => console.log("Error loading projects:", err));
