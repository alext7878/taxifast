document.getElementById('taxiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos
    const inicio = document.getElementById('inicio').value;
    const destino = document.getElementById('destino').value;
    const pago = document.getElementById('pago').value;
    const email = document.getElementById('email').value;

    // Validar que todos los campos estén completos
    if (!inicio || !destino || !pago || !email) {
        mostrarMensaje('Por favor, completa todos los campos.', 'error');
        return;
    }

    // Mostrar el resultado simulado (opcional)
    mostrarMensaje('Tu solicitud ha sido enviada exitosamente. Redirigiendo...', 'success');

    // Redirigir a la página FormaDePagoUsuario.html
    setTimeout(function() {
        window.location.href = 'FormaDePagoUsuario.html';
    }, 2000);  // Redirige después de 2 segundos para que se muestre el mensaje
});

function mostrarMensaje(mensaje, tipo) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
    resultadoDiv.className = tipo;
    resultadoDiv.style.display = 'block';
}



