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


// Obtener el elemento del botón
var comprarBtn = document.getElementById("comprar-btn");

// Agregar un evento de clic al botón
comprarBtn.addEventListener("click", function() {
  // Aquí puedes agregar la acción que deseas realizar al hacer clic en el botón
  // Por ejemplo, redireccionar a una página de compra o realizar alguna otra acción
  window.location.href = "https://www.instagram.com/iphonexclusivecba/";});






  $(window).on('scroll', function() {
    $('.house-1').each(function() {
        if (isElementInViewport($(this))) {
            $(this).addClass('show');
        }
    });
});

function isElementInViewport(element) {
    var rect = element[0].getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
