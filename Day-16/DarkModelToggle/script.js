const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const div = document.querySelector('div');


body.classList.add('light-mode');

toggleBtn.addEventListener('click', ()=> {
    if(body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleBtn.textContent = 'Switch to Light Mode';
    }
    else {
        body.classList.replace('dark-mode', 'light-mode');
        toggleBtn.textContent = 'Switch to Dark Mode';

    }
});