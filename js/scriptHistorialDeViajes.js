// JavaScript para manejar el inicio de sesión y la navegación

// Manejar el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica (puedes agregar más validaciones)
    if (email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Redirigir a la página de historial de viajes
    window.location.href = 'HistorialDeViajes.html';
});

// Manejar el botón "Regresar a Inicio" en la página de historial de viajes
if (document.getElementById('backButton')) {
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirigir al login
    });
}
