var menu = document.querySelector('.header__menu');
var button = document.querySelector('.header__icon');
var content = document.querySelector('.header__content');

menu.classList.remove('no-js');
button.classList.remove('no-js');
content.classList.remove('no-js');

menu.classList.remove('header__menu--opened');
button.classList.remove('header__icon--opened');

button.addEventListener('click', showPopup);

function showPopup() {
  menu.classList.toggle('header__menu--opened');
  button.classList.toggle('header__icon--opened');
}
