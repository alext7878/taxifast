<?php
session_start();
session_destroy(); // Destruir todas las sesiones activas
header("Location: ../index.html"); // Redirigir al inicio
exit();
?>
