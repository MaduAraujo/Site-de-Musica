document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username && password) {
            alert('Usuário: ' + username + '\nSenha: ' + password);
            // Aqui você pode adicionar a lógica para enviar o formulário via AJAX, por exemplo
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
