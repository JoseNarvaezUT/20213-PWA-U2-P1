
// Preguntamos si el navegador y/o el sitio dispone de SW
if(navigator.serviceWorker){
    console.log("Service Worker Disponible");
    navigator.serviceWorker.register('/sw.js');
}else{
    console.log('Service Worker NO Disponible');
}