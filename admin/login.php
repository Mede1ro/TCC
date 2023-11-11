<?php
include_once "../pages/conectar.php";

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['usuario']) && isset($_POST['senha'])) {
        $usuarios = $_POST['usuario'];
        $senha = $_POST['senha'];

        $query_login = "SELECT * FROM admin WHERE usuario = ? AND senha = ?";

        $stmt = $conexao->prepare($query_login);
        $stmt->bind_param("ss", $usuarios, $senha);

        $stmt->execute();

        $resultado = $stmt->get_result();

        if ($resultado->num_rows > 0) {
            $_SESSION['usuarios'] = $usuarios;
            $_SESSION['nome'] = $row->nome;
            header('Location: dashboard/dashboard.php');
            exit;
        } else {
            echo "Usuário e/ou senha incorreto(s). Tente novamente.";
            header('Location: index.html');
        }

        $stmt->close();
    } else {
        echo "Por favor, preencha todos os campos.";
    }
}

$conexao->close();
?>