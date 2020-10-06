const mobileMenu = document.querySelector('.header__mobile-menu');
const hamburger = document.getElementById('hamburger-img');

hamburger.addEventListener('click', () => {
  if (!mobileMenu.classList.contains('hidden')) {
    hamburger.src = './images/icon-hamburger.svg';
  } else {
    hamburger.src = './images/icon-close.svg';
  }
  mobileMenu.classList.toggle('hidden');
});
