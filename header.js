var menu = document.querySelector('.header__menu');
var button = document.querySelector('.header__icon--closed');

button.addEventListener('click', showPopup);

function showPopup() {
  menu.classList.remove('header__menu--closed');
  button.classList.remove('header__icon--closed');
  button.classList.add('header__icon--opened');
}
