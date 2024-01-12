const modoClaroEscuroBtn = document.getElementById('modo-claro-escuro-btn');
const body = document.body;

modoClaroEscuroBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

