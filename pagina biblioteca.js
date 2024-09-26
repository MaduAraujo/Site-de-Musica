document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Botão de reprodução clicado!');
        });
    });
});