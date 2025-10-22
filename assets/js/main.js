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


// Accordions
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isOpen = panel.style.display === 'block';
    panel.style.display = isOpen ? 'none' : 'block';
  });
});
