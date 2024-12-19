<?php
require 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $correo = $_POST['correo'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT); // Hashear la contraseña

    // Verificar si el usuario ya existe
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE usuario = :usuario");
    $stmt->bindParam(':usuario', $usuario);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        // Usuario ya registrado
        echo "El usuario ya existe.";
    } else {
        // Insertar nuevo usuario
        $stmt = $conn->prepare("INSERT INTO usuarios (usuario, correo, contrasena) VALUES (:usuario, :correo, :contrasena)");
        $stmt->bindParam(':usuario', $usuario);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':contrasena', $contrasena);

        if ($stmt->execute()) {
            echo "Registro exitoso. Ahora puedes <a href='../views/login.html'>iniciar sesión</a>.";
        } else {
            echo "Error al registrarse. Intenta nuevamente.";
        }
    }
}
?>
