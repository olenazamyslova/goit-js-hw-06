const fontSizeContr = document.querySelector('#font-size-control');
const spanTxt = document.querySelector('#text');

spanTxt.style.fontSize = fontSizeContr.value + 'px';

const resizingFunc = () => {
    spanTxt.style.fontSize = `${fontSizeContr.value}px`;
}

fontSizeContr.addEventListener('input', resizingFunc);
