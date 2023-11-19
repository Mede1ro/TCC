<?php
include_once "../pages/conectar.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['usuario']) && isset($_POST['senha'])) {
        $usuario = $_POST['usuario'];
        $senha = $_POST['senha'];

        $query_login = "SELECT * FROM ADMIN WHERE usuario = ? AND senha = ?";

        $stmt = $conexao->prepare($query_login);
        $stmt->bind_param("ss", $usuario, $senha);

        // Executar a consulta
        $stmt->execute();

        // Obter resultado
        $resultado = $stmt->get_result();

        if ($resultado->num_rows > 0) {
            // As credenciais estão corretas, redirecione para a página de admin
            header('Location: dashboard/dashboard.html');
            exit;
        } else {
            echo "Usuário ou senha incorretos. Tente novamente.";
        }

        // Fechar a declaração preparada
        $stmt->close();
    } else {
        echo "Por favor, preencha todos os campos.";
    }
}

$conexao->close();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <title>Admin</title>
</head>

<body>
    <div class="container-login">
        <div class="container-login-background">
            <div class="card-conteudo">
                <div class="card-conteudo-login">
                    <div class="card-conteudo-login-header">
                        <img src="../assets/logo.svg" alt="Logo IFRJ">
                        <h1>Login<span class="card-conteudo-login-header-barra"></span>
                            <span class="card-conteudo-login-header-admin">Administrador<span>
                        </h1>
                    </div>
                    <form class="card-conteudo-login-form" method="post" action="login.php">
                        <div class="text-input">
                            <i class="ri-user-fill"></i>
                            <input type="text" name="usuario" id="usuario" placeholder="Usuário">
                        </div>

                        <div class="text-input">
                            <i class="ri-lock-fill"></i>
                            <input type="password" name="senha" id="senha" placeholder="Senha">
                        </div>
                        <input type="submit" name="enviar" value="Enviar">
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>


</html>