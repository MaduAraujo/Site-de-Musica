document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const passwordInput = document.querySelector('input[placeholder="Senha"]');
    const nextButton = document.querySelector('button.next');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o envio do formulário

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email) {
            alert('O campo de email é obrigatório.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (!password) {
            alert('O campo de senha é obrigatório.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Se tudo estiver correto, você pode enviar o formulário ou fazer outra ação
        alert('Formulário enviado com sucesso!');
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});