function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const windowEl = document.body;
const changeClrBtn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeClrBtn.addEventListener('click', () => {
  windowEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = windowEl.style.backgroundColor;
})