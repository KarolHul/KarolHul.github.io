document.getElementById('languageButton').addEventListener('click', function() {
    if (document.documentElement.lang === 'pl') {
        window.location.href = 'index_en.html'; // Przekierowanie do wersji angielskiej
    } else {
        window.location.href = 'index.html'; // Przekierowanie do wersji polskiej
    }
});
