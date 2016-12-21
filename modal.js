var popup = document.querySelector('.modal');
var button = document.querySelector('.itemOfWeek__orderButton');

console.log(popup)
button.addEventListener('click', showPopup);

function showPopup() {
  popup.classList.remove('modal--hidden');
}
