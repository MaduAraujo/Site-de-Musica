const prevButton = document.getElementById('prev-arrow');
        const nextButton = document.getElementById('next-arrow');
        const list = document.querySelector('.spotify-playlists .list');

        nextButton.addEventListener('click', function() {
            list.scrollBy({ left: 200, behavior: 'smooth' });
        });

        prevButton.addEventListener('click', function() {
            list.scrollBy({ left: -200, behavior: 'smooth' });
        });