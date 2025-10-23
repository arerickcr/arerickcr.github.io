// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme: load preference or system
const body   = document.body;
const toggle = document.getElementById('theme-toggle');

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (saved === 'dark' || (!saved && prefersDark)) {
  body.classList.add('dark');
  toggle.setAttribute('aria-label','Switch to light mode');
} else {
  toggle.setAttribute('aria-label','Switch to dark mode');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const dark = body.classList.contains('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
});


// Accordions (allow one open per section)
document.querySelectorAll('.cv').forEach(section => {
  const rows = section.querySelectorAll('.cv-accordion');
  rows.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const open = panel.style.display === 'block';

      // close all rows in this section
      rows.forEach(b => {
        b.classList.remove('active');
        const p = b.nextElementSibling;
        if (p) p.style.display = 'none';
      });

      // open the clicked one (if it was closed)
      if (!open) {
        btn.classList.add('active');
        panel.style.display = 'block';
      }
    });
  });
});

// keep the old generic accordions working (Education etc.)
document.querySelectorAll('.accordion:not(.cv-accordion)').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    btn.classList.toggle('active');
  });
});
