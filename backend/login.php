<?php
session_start();
require 'db_config.php'; // Conectar a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Consulta para verificar el usuario y la contraseña
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE usuario = :usuario AND contrasena = :contrasena");
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':contrasena', $contrasena);
    $stmt->execute();

    if ($stmt->rowCount() == 1) {
        // Usuario autenticado
        $_SESSION['usuario'] = $usuario;
        header("Location: ../views/dashboard.php");
        exit();
    } else {
        // Usuario no encontrado o contraseña incorrecta
        echo "Usuario o contraseña incorrectos";
    }
}
?>

