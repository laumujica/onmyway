// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappNumber = "+543512481479"; // Reemplaza con el número de WhatsApp asociado al QR
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(`Nombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message}`)}`;

    window.open(url, '_blank');
});
