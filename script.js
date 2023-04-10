const hamburger = document.querySelector('.hamburger');
const mobMenu = document.querySelector('.mob-menu');
const xIcon = document.querySelector('.x-icon');

hamburger.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
});

xIcon.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});
