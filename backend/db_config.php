<?php
$host = "localhost";
$dbname = "nombre_de_tu_base_de_datos";
$username = "tu_usuario";
$password = "tu_contraseña";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Habilitar excepciones
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>
