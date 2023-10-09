const form = document.getElementById('form-exercicio');
const numeroA = document.getElementById('numero-A');
const numeroB = document.getElementById('numero-B');
const errorMsg = document.querySelector('.error-msg');
const successMsg = document.querySelector('.success-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const valueA = parseFloat(numeroA.value);
    const valueB = parseFloat(numeroB.value);

    if (isNaN(valueA) || isNaN(valueB)) {
        errorMsg.textContent = 'Ambos os campos devem ser números.';
        successMsg.textContent = '';
    } else if (valueA >= valueB) {
        errorMsg.textContent = 'O número do "campo A" precisa ser menor que o do "campo B".';
        successMsg.textContent = '';
    } else {
        errorMsg.textContent = '';
        successMsg.textContent = 'Seu formulário foi enviado.';
    }
});

numeroA.addEventListener('input', function () {
    errorMsg.textContent = '';
    successMsg.textContent = '';
});

numeroB.addEventListener('input', function () {
    errorMsg.textContent = '';
    successMsg.textContent = '';
});