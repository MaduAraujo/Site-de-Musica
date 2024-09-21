document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirm-email');
    const resetButton = document.querySelector('.next');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = emailInput.value;
        const confirmEmail = confirmEmailInput.value;

        if (email === confirmEmail) {
            // Desabilita o botão para evitar múltiplos envios
            resetButton.disabled = true;
            resetButton.textContent = 'Processando...';

            // Lógica para enviar o formulário e redefinir a senha
            fetch('/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Senha redefinida com sucesso! Verifique seu email para mais instruções.');
                } else {
                    alert('Houve um problema ao redefinir sua senha. Por favor, tente novamente.');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao tentar redefinir sua senha. Por favor, tente novamente mais tarde.');
            })
            .finally(() => {
                // Reabilita o botão após o processamento
                resetButton.disabled = false;
                resetButton.textContent = 'Redefinir Senha';
            });
        } else {
            alert('Os emails não conferem. Por favor, verifique e tente novamente.');
        }
    });
});
