// Tracklist toggles
document.querySelectorAll(".tracklist-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const list = btn.nextElementSibling;
    const isOpen = list.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.textContent = isOpen ? "Masquer les pistes" : "Voir les pistes";
  });
});

// Ember particle background (confined to the hero panel)
(() => {
  const canvas = document.getElementById("embers");
  const hero = canvas.closest(".hero");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width, height, particles;
  const COLORS = ["177,74,49", "191,153,104", "205,190,172"];

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  }

  function makeParticle() {
    return {
      x: Math.random() * width,
      y: height + Math.random() * 100,
      r: 1 + Math.random() * 2.5,
      speed: 0.3 + Math.random() * 1.1,
      drift: (Math.random() - 0.5) * 0.6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0.2 + Math.random() * 0.6,
      flicker: Math.random() * Math.PI * 2,
    };
  }

  function init() {
    resize();
    const count = Math.min(90, Math.floor((width * height) / 18000));
    particles = Array.from({ length: count }, makeParticle);
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y -= p.speed;
      p.x += p.drift + Math.sin(p.flicker) * 0.2;
      p.flicker += 0.03;

      if (p.y < -10) Object.assign(p, makeParticle(), { y: height + 10 });

      const glow = 0.5 + Math.sin(p.flicker) * 0.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha * glow})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(${p.color},0.8)`;
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  if (!reduceMotion) {
    window.addEventListener("resize", resize);
    init();
    requestAnimationFrame(tick);
  }
})();
