const inputVal = document.querySelector('#validation-input');

const checkN = () => {
    if (inputVal.value.length === Number(inputVal.dataset.length)) {
        inputVal.classList.remove(`invalid`);
        inputVal.classList.add(`valid`);
        return;
    } else {
        inputVal.classList.remove(`valid`);
        inputVal.classList.add(`invalid`);
        
    };
}
inputVal.addEventListener('blur', checkN);

