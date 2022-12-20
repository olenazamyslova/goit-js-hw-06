let counterValue = document.querySelector('#value');
const decrVal = document.querySelector('button[data-action="decrement"]');
const incVal = document.querySelector('button[data-action="increment"]');

const inc = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
    
};
const dec = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

decrVal.addEventListener('click', dec);
incVal.addEventListener('click', inc);