document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorServicio = document.getElementById('valorServicio').value;
    const origenViaje = document.getElementById('origenViaje').value;
    const destinoViaje = document.getElementById('destinoViaje').value;

    if (!valorServicio || !origenViaje || !destinoViaje) {
        mostrarMensaje('Por favor, completa todos los campos.', 'error');
        return;
    }

    mostrarMensaje('El pago ha sido confirmado exitosamente.', 'success');
});

document.getElementById('seleccionarEfectivoBtn').addEventListener('click', function() {
    const checkbox = document.getElementById('efectivoCheckbox');
    checkbox.checked = !checkbox.checked;  // Alternar selección
    mostrarMensaje('Forma de pago seleccionada: Efectivo.', 'success');
});

document.getElementById('seleccionarTarjetaBtn').addEventListener('click', function() {
    const checkbox = document.getElementById('tarjetaCheckbox');
    checkbox.checked = !checkbox.checked;  // Alternar selección
    mostrarMensaje('Forma de pago seleccionada: Tarjeta de Crédito.', 'success');
});

function mostrarMensaje(mensaje, tipo) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
    resultadoDiv.className = tipo;
    resultadoDiv.style.display = 'block';
}
