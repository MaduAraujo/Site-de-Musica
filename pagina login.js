document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }
        
        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        // Se tudo estiver correto, você pode enviar o formulário
        alert('Formulário enviado com sucesso!');
        form.submit();
    });
});
