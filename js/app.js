
// Preguntamos si el navegador y/o el sitio dispone de SW
let url = window.location.href;
let swDirect = "/20213-PWA-U2-P1/sw.js";

if(navigator.serviceWorker){
    console.log("Service Worker Disponible");
    if(url.includes('localhost')){
        swDirect='/sw.js';
    }

    navigator.serviceWorker.register(swDirect);
}else{
    console.log('Service Worker NO Disponible');
}