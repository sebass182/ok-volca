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
const tabs = document.querySelectorAll(".discographie .tab");
const panels = document.querySelectorAll(".discographie .album-card");

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
