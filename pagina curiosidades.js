let slideIndex = 0;

// Função para mover os slides no carrossel
function moverSlide(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    const container = document.getElementById('carousel-container');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    container.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Função para buscar a música favorita
async function buscarMusicaFavorita(event) {
    event.preventDefault();
    let musica = document.getElementById('musica-favorita').value.trim();
    musica = musica.replace(/\s+/g, ''); // Remove espaços entre palavras
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(musica)}&media=music&limit=1`;

    if (musica) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.results.length > 0) {
                const trackInfo = data.results[0];
                document.getElementById('resultado-musica').innerHTML = `
                    <p><strong>${trackInfo.trackName}</strong> - ${trackInfo.artistName}</p>
                    <p>Álbum: ${trackInfo.collectionName}</p>
                    <p><a href="${trackInfo.trackViewUrl}" target="_blank">Ouça no iTunes</a></p>
                    <img src="${trackInfo.artworkUrl100}" alt="Capa do Álbum">
                `;
            } else {
                document.getElementById('resultado-musica').innerText = 'Nenhuma informação encontrada para essa música.';
            }
        } catch (error) {
            document.getElementById('resultado-musica').innerText = 'Erro ao buscar informações. Tente novamente.';
        }
    } else {
        alert("Por favor, insira uma música válida.");
    }
}

// Função para exibir curiosidade
function exibirCuriosidade(event) {
    event.preventDefault();
    var curiosidade = document.getElementById('curiosidade').value;
    if (curiosidade.trim() !== "") {
        document.getElementById('resultado-curiosidade').innerText = 'Você compartilhou: ' + curiosidade;
        document.getElementById('curiosidade').value = '';
    } else {
        alert("Por favor, insira uma curiosidade!");
    }
}
