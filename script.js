const hamburger = document.querySelector('.hamburger');
const topMenu = document.querySelector('.nav-top');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  topMenu.classList.toggle('active');
});
