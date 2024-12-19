<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: ../views/login.html"); // Redirigir al login si no está autenticado
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - TaxiFast</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1 class="text-center my-5">Bienvenido al Dashboard, <?php echo $_SESSION['usuario']; ?>!</h1>
        <p>Aquí puedes solicitar tu taxi, gestionar tu perfil y mucho más.</p>
        <a href="../backend/logout.php" class="btn btn-danger">Cerrar sesión</a>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
