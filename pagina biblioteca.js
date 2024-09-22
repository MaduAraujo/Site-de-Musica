document.addEventListener('DOMContentLoaded', () => {
    const songItems = document.querySelectorAll('.songItem');
    const audio = new Audio();

    songItems.forEach(item => {
        item.addEventListener('click', () => {
            const songId = item.querySelector('.playlistPlay').id;
            const songSrc = `audio/song${songId}.mp3`; // Supondo que os arquivos de áudio estejam na pasta 'audio' e nomeados como 'song1.mp3', 'song2.mp3', etc.
            audio.src = songSrc;
            audio.play();
        });
    });
});
