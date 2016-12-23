var popup = document.querySelector('.modal');
var button = document.querySelector('.js-order-button');

button.preventDefault;
button.addEventListener('click', showPopup);

function showPopup() {
  popup.classList.remove('modal--hidden');
}
