document.addEventListener('DOMContentLoaded', function() {
    // Função para a barra de pesquisa
    const searchBar = document.querySelector('.search-bar input');
    searchBar.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            alert(`Você pesquisou por: ${searchBar.value}`);
        }
    });

    // Função para os ícones de imagem
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(function(container) {
        container.addEventListener('click', function() {
            const img = container.querySelector('img');
            if (img) {
                alert(`Você clicou na imagem: ${img.alt}`);
            }
        });
    });
});

