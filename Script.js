document.addEventListener("DOMContentLoaded", () => {

    // ===== CURSOR =====
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // ===== TYPING EFFECT (FIXED) =====
    const text = "Software Engineering Student | Future Full Stack Developer";
    let i = 0;

    function typeEffect() {
        const el = document.querySelector(".typing");

        if (!el) {
            setTimeout(typeEffect, 300); // retry instead of stopping
            return;
        }

        el.textContent = text.substring(0, i);
        i++;

        if (i <= text.length) {
            setTimeout(typeEffect, 80);
        } else {
            setTimeout(() => {
                i = 0; // restart cleanly
                typeEffect();
            }, 1500);
        }
    }

    typeEffect();

    // ===== REVEAL ON SCROLL (FIXED) =====
    function revealOnScroll() {
        document.querySelectorAll(".reveal").forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
