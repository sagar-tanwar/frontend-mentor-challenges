const navbar = document.querySelector('.navbar');
const navbar__trigger = navbar.querySelector('.navbar__trigger');

navbar__trigger.addEventListener('click', () => navbar.classList.toggle('active'))