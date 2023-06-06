document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    var nombre = formData.get('nombre');
    var dispositivo = formData.get('dispositivo');
    var mensaje = formData.get('mensaje');
    
    var whatsappLink = 'https://wa.me/3513466611?text=Nombre%3A%20' + encodeURIComponent(nombre) +
                       '%0ADispositivo%20interesado%3A%20' + encodeURIComponent(dispositivo) +
                       '%0AMensaje%3A%20' + encodeURIComponent(mensaje);
    
    window.location.href = whatsappLink;
});
