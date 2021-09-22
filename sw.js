// console.log('SW: Hola mundo');

self.addEventListener('install', (event) => {
    console.log('SW: Instalado');
});

self.addEventListener('activate', (event) => {
    console.log('SW: Activado y controlando la app');
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);

    if (event.request.url.includes('.jpg')) {
        let newResp = fetch('/20213-PWA-U2-P1/img/felino.jpg');
        console.log('Es un imagen :D');
        event.respondWith(newResp);
    }

    if (event.request.url.includes('page.css')) {

        let newReponse = new Response(`body{
            background-color:black !important;
            color: red;
        }`, {
            headers: {
                'Content-Type': 'text/css'
            }
        });
        event.respondWith(newReponse);
    }




});