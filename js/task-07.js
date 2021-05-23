// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
};

const fontSize = event => {
    refs.text.style.fontSize =`${refs.fontSizeControl.value}px`;
};

refs.fontSizeControl.addEventListener('input', fontSize);