document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del Botón de Alerta
    const btnAlerta = document.getElementById('btnAlerta');
    btnAlerta.addEventListener('click', () => {
        alert('🚀  Has activado la alerta personalizada del sistema.');
    });

    // 2. Validación del Formulario
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        // Si el formulario no es válido, detenemos el envío
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert('✅ Mensaje enviado con éxito. ¡Gracias por contactarnos!');
            form.reset();
            form.classList.remove('was-validated');
            return;
        }

        // Añadimos la clase de Bootstrap para mostrar errores visualmente
        form.classList.add('was-validated');
    }, false);
});