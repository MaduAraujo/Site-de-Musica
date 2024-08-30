document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[name="email"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const resetButton = document.querySelector('button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (validateEmail(email) && validateUsername(username) && validatePhone(phone)) {
            // Enviar dados para o servidor
            fetch('/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, username, phone })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = 'senha redefinida.html';
                } else {
                    alert('Erro ao redefinir a senha. Tente novamente.');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao redefinir a senha. Tente novamente.');
            });
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateUsername(username) {
        return username.length > 0;
    }

    function validatePhone(phone) {
        const re = /^\d{10,15}$/;
        return re.test(phone);
    }
});
