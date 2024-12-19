document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento de envío por defecto
  
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const esConductor = document.getElementById('esConductor').checked;
  
    // Validación de las contraseñas
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }
  
    // Lógica para redirigir a la página de usuario o conductor
    if (esConductor) {
      window.location.href = 'pagina_conductor.html';
    } else {
      window.location.href = 'pagina_usuario.html';
    }
  });
  
  document.getElementById('loginButton').addEventListener('click', function() {
    // Lógica para el botón de iniciar sesión
    window.location.href = 'login.html';
  });