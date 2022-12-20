function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const userControls = document.querySelector('#controls');
const userInp = document.querySelector('input');
const dataCreate = document.querySelector('button [data-create]');
const dataDestroy = document.querySelector('button [data-destroy]');
const mainBlock = document.querySelector('#boxes');



