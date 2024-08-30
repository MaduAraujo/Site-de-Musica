document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');

    userInput.addEventListener('blur', function() {
        alert('Você escreveu: ' + userInput.value);
    });
});
