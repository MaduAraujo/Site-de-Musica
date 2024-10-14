const apiKey = 'YOUR_API_KEY'; // Substitua pela sua chave de API do YouTube

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
    musica = musica.replace(/\s+/g, ' '); // Remove espaços extras entre palavras
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(musica)}&type=video&key=${apiKey}&maxResults=1`;
    if (musica) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.items.length > 0) { // Corrigi para acessar o array 'items' ao invés de 'results'
                const trackInfo = data.items[0].snippet; // Acessando as informações da música
                document.getElementById('resultado-musica').innerHTML = `
                    <p><strong>${trackInfo.title}</strong></p>
                    <p>Canal: ${trackInfo.channelTitle}</p>
                    <p><a href="https://www.youtube.com/watch?v=${data.items[0].id.videoId}" target="_blank">Assista no YouTube</a></p>
                    <img src="${trackInfo.thumbnails.default.url}" alt="Capa do Álbum">
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
    const curiosidade = document.getElementById('curiosidade').value;
    if (curiosidade.trim() !== "") {
        document.getElementById('resultado-curiosidade').innerText = 'Você compartilhou: ' + curiosidade;
        document.getElementById('curiosidade').value = '';
    } else {
        alert("Por favor, insira uma curiosidade!");
    }
}