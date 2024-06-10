document.getElementById('plButton').addEventListener('click', function() {
    if (document.documentElement.lang !== 'pl') {
        window.location.href = 'index.html'; // Przekierowanie do wersji polskiej
    }
});

document.getElementById('engButton').addEventListener('click', function() {
    if (document.documentElement.lang !== 'en') {
        window.location.href = 'index_en.html'; // Przekierowanie do wersji angielskiej
    }
});
