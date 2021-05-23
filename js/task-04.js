
const refs = {
    incrementCounterBtn: document.querySelector('[data-action="increment"]'),
    decrementCounterBtn: document.querySelector('[data-action="decrement"]'),
};

const counterValue = document.querySelector('#value');

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};
refs.decrementCounterBtn.addEventListener('click', function () {
    counter.decrement();
    counterValue.textContent = counter.value;
});

refs.incrementCounterBtn.addEventListener('click', function () {
    counter.increment();
    counterValue.textContent = counter.value;
});


