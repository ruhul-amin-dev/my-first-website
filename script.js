// script.js
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const btn = document.getElementById('cta');
btn.addEventListener('click', () => {
  alert('Welcome to Week 1 — deployed via GitHub Pages!');
});
