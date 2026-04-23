document.addEventListener("DOMContentLoaded", () => {

    // Page fade-in effect
    document.body.style.opacity = 0;
    document.body.style.transition = "1s";

    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);

});
