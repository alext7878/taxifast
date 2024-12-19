document.getElementById('taxiServiceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ubicacion = document.getElementById('ubicacion').value;
    const contratar = document.getElementById('contratar').value;

    if (!ubicacion || !contratar) {
        mostrarMensaje('Por favor, completa todos los campos.', 'error');
        return;
    }

    mostrarMensaje('Tu solicitud ha sido enviada exitosamente.', 'success');
});

document.getElementById('agregarViajeBtn').addEventListener('click', function() {
    const nuevoViaje = document.getElementById('nuevoViaje').value;
    
    if (nuevoViaje) {
        const listaViajes = document.getElementById('listaViajes');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nuevoViaje;
        listaViajes.appendChild(nuevoElemento);

        document.getElementById('nuevoViaje').value = '';
    } else {
        alert('Por favor, ingresa los detalles del viaje.');
    }
});

function mostrarMensaje(mensaje, tipo) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
    resultadoDiv.className = tipo;
    resultadoDiv.style.display = 'block';
}
