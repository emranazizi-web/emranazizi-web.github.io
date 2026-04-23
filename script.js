// ===== SCROLL REVEAL =====
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


// ===== MATRIX RAIN (010101010 BACKGROUND) =====
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.id = "matrix";

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "010101010101010101";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(255,255,255,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#60a5fa";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 40);
