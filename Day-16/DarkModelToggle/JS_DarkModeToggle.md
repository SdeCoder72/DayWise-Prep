# 🌙 JavaScript Dark Mode Toggle

## 🔧 Overview
This mini project demonstrates how to implement a dark mode toggle using JavaScript.

## 🧩 Key Concepts
- DOM manipulation
- Event listeners
- CSS class toggling

## 💡 Code Snippet

```js
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }
};
