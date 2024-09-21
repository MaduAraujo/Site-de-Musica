document.addEventListener("DOMContentLoaded", function() {
    function submitFavoriteSong() {
        const favoriteSong = document.getElementById("favoriteSong").value;
        const response = document.getElementById("response");
        response.textContent = `Sua música favorita do Queen é: ${favoriteSong}`;
    }

    function submitCuriosidade() {
        const curiosidade = document.getElementById("curiosidades").value;
        const response = document.getElementById("response");
        response.textContent = `Você compartilhou: ${curiosidade}`;
    }

    document.querySelectorAll("button")[0].addEventListener("click", submitFavoriteSong);
    document.querySelectorAll("button")[1].addEventListener("click", submitCuriosidade);
});
