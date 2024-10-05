document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var message = document.createElement('p');
        message.innerText = 'Bem-vindo(a) à Aperte o Play!';
        message.style.opacity = 0;
        message.style.transition = 'opacity 2s';

        // Adiciona o parágrafo antes do footer
        var footer = document.querySelector('footer');
        footer.parentNode.insertBefore(message, footer);

        // Após adicionar, muda a opacidade para 1 para criar o efeito de desvanecimento
        setTimeout(function() {
            message.style.opacity = 1;
        }, 100); // Pequeno atraso para que o efeito funcione
    }, 3000); // 2000 milissegundos = 2 segundos
});


