// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.



const refs = {
    input: document.querySelector('#validation-input'),
    correctLength: document.querySelector('[data-length="6"]'),
};

refs.input.addEventListener('blur', onInputChange);
refs.input.classList.add('input');

function onInputChange(event) {
    if (event.currentTarget.value.length === 6) {
        refs.input.classList.replace('invalid', 'valid');
    } else {
        refs.input.classList.add('invalid');
    };
};

