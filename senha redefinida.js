function showConfirmation(message) {
    alert(message);
}

document.addEventListener('DOMContentLoaded', function() {
    // Redireciona para a página de login após 3 segundos
    setTimeout(function() {
        window.location.href = 'pagina login.html';
    }, 3000);
});