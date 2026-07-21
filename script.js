// Cambia este enlace por tu sitio web, perfil de LinkedIn o portafolio
var enlacePersonal = "https://wa.me/573008936888?text=Hola%20me%20interesa%20contactar";

var qr = new QRCode(document.getElementById("contenedor-qr"), {
    text: enlacePersonal,
    width: 150, // Tamaño en píxeles
    height: 150,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
