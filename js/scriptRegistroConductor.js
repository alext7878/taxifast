document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const placa = document.getElementById('placa').value;
    const licencia = document.getElementById('licencia').value;
    const modelo = document.getElementById('modelo').value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        mostrarMensaje('Las contraseñas no coinciden.', 'error');
        return;
    }

    // Validar que todos los campos estén completos
    if (!nombre || !celular || !email || !password || !placa || !licencia || !modelo) {
        mostrarMensaje('Por favor, completa todos los campos.', 'error');
        return;
    }

    // Mostrar el resultado simulado
    mostrarMensaje('Registro de conductor exitoso.', 'success');
});

function mostrarMensaje(mensaje, tipo) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
    resultadoDiv.className = tipo;
    resultadoDiv.style.display = 'block';
}
