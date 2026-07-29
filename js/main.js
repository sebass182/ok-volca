// Tracklist toggles
document.querySelectorAll(".tracklist-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const list = btn.nextElementSibling;
    const isOpen = list.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.textContent = isOpen ? "Masquer les pistes" : "Voir les pistes";
  });
});

// Discography tabs
const tabs = document.querySelectorAll(".discographie__tabs .tab");
const panels = document.querySelectorAll(".album");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.album;

    tabs.forEach((t) => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", String(t === tab));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== target;
    });
  });
});

// Scroll reveal
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll(".reveal");

if (reduceMotion) {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
}

// Parallax images: shift each [data-parallax] image based on scroll position
const parallaxEls = Array.from(document.querySelectorAll("[data-parallax] img"));

if (!reduceMotion && parallaxEls.length) {
  let ticking = false;

  function updateParallax() {
    const viewportH = window.innerHeight;
    for (const img of parallaxEls) {
      const rect = img.parentElement.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      const shift = progress * -40; // px of vertical drift
      img.style.transform = `translateY(${shift}px)`;
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateParallax();
}
