<?php
include_once "../pages/conectar.php";

// Obtém os dados do formulário usando filter_input_array
$info = filter_input_array(INPUT_POST, FILTER_DEFAULT);


$query_contato = "INSERT INTO contato(Nome, Email, Cidade, Mensagem, Fotos) VALUES (?, ?, ?, ?, ?)";
$envioForm = $conexao->prepare($query_contato);

// Vincula os parâmetros
$envioForm->bind_param('sssss', $info['nome'], $info['email'], $info['cidade'], $info['mensagem'], $info['upload']);

// Executa a consulta
$envioForm->execute();
?>