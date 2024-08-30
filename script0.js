document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de funcionalidade: Mostrar um alerta ao clicar no botão
    const btnPrimary = document.querySelector('.btn-primary');
    btnPrimary.addEventListener('click', function() {
        alert('Você clicou no botão!');
    });
    
    
    // Exemplo de funcionalidade: Navegação suave ao clicar nos links do menu
    const navbarItems = document.querySelectorAll('.navbar-items a');
    navbarItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Adiciona evento de clique ao botão principal
    document.querySelector('.btn-primary').addEventListener('click', () => {
        alert('Confira nossos planos!');
    });

    // Adiciona evento de clique aos links do menu do rodapé
    document.querySelectorAll('.footer-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });
});

src="https://kit.fontawesome.com/f9e19193d6.js"
crossorigin="anonymous"