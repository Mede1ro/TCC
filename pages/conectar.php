<?php

$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = '';

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
}
?>