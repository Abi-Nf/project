// in html file
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                console.log('Service Worker enregistré avec succès : ', registration);
            }, function(error) {
                console.log('Erreur lors de l\'enregistrement du Service Worker : ', error);
            });
    });
}
