const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const mainCard = document.getElementById('main-card');
const successCard = document.getElementById('success-card');
const emailInput = document.getElementById('email-input');
const submitButton =document.getElementById('submit-btn');
const invalidMsg = document.getElementById('invalid-msg');

function wrongMail() {
    emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 0.2)';
    emailInput.style.border = '1px solid var(--Tomato)'
    emailInput.style.color = 'var(--Tomato)';
    invalidMsg.classList.remove('hidden');
}

function reset() {
    emailInput.style.backgroundColor = 'var(--White)';
    emailInput.style.border = '1px solid var(--Grey)';
    emailInput.style.color = 'black';
    invalidMsg.classList.add('hidden');
}

function testEmail(email) {
    if (emailRegex.test(email)) {
        mainCard.classList.add('hidden');
        successCard.classList.remove('hidden');
    } else {
        wrongMail();
    }
}

submitButton.addEventListener('click', () => {
    testEmail(emailInput.value);
});

emailInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        testEmail(emailInput.value);
    }
});

emailInput.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        reset();
    }
});