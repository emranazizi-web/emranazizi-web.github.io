document.addEventListener("DOMContentLoaded", () => {

    // cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    // typing
    const text = "Software Engineering Student | Future Full Stack Developer";
    let i = 0;

    function typeEffect() {
        const el = document.querySelector(".typing");
        if (!el) return;

        el.innerHTML = text.slice(0, i);
        i++;

        if (i > text.length) i = 0;

        setTimeout(typeEffect, 100);
    }

    typeEffect();

    // reveal
    function revealOnScroll() {
        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
