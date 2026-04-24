const canvas = document.getElementById("bg");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    let particles = [];

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 1,
            dy: (Math.random() - 0.5) * 1
        });
    }

    function drawLine(p1, p2) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = "rgba(0,195,255,0.2)";
        ctx.stroke();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

            ctx.fillStyle = "#00c3ff";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    drawLine(particles[i], particles[j]);
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}
