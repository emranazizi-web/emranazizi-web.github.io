const items = document.querySelectorAll(".reveal");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  items.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
