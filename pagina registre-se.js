document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('#password');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        if (!emailPattern.test(emailInput.value)) {
            alert('Por favor, insira um endereço de email válido.');
            valid = false;
        }

        if (passwordInput.value.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            valid = false;
        }

        if (valid) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        }
    });
});
