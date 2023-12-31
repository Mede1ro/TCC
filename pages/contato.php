<?php
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="shortcut icon" href="../assets/logo.svg" type="image/x-icon">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <title>Contato</title>
</head>

<body>
  <header class="cabecalho">
    <a class="cabecalho-imagem" href="../index.php"><img src="../assets/logo.svg" alt="Logo do IFRJ">Observatório
      dos Conflitos Ambientais</a>
    <nav class="cabecalho-menu ">
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="../index.php">Inicio</a>
      </li>
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="atualizacoes.php">Atualizações</a>
      </li>
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="sobre.php">Sobre</a>
      </li>
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="contato.php">Contato</a>
      </li>
    </nav>
  </header>

  <main class="container-contato">
    <h1 class="conteudo-contato-titulo"><img src="../assets/contato/mao.png"> Contato</h1>

    <div class="conteudo-contato-texto">
      <p>
        Este formulário serve como uma maneira de entrar em contato conosco para fins gerais ou para
        compartilhar informações sobre conflitos ambientais na <span>Região dos Lagos</span>. Se você deseja
        apenas
        fazer contato,
        faça o preenchimento do formulário e nós responderemos às suas perguntas ou comentários.
        <br><br>
        No entanto, se você tiver informações sobre conflitos ambientais que deseja compartilhar conosco,
        sinta-se à vontade para preencher o formulário com detalhes sobre o conflito. Estamos comprometidos em
        aumentar a conscientização sobre questões ambientais e em destacar problemas que merecem atenção.
        <br><br>
        Sua contribuição é importante, seja para contatos gerais ou para compartilhar informações sobre
        conflitos ambientais. Agradecemos por se envolver e estamos à disposição para ajudar e ouvir.
      </p>
    </div>

    <form class="conteudo-contato-formulario" action="contato.php" method="post" id="form">
      <label for="nome">Nome:</label>
      <input type="text" name="nome" id="nome">

      <label for="email">Email:</label>
      <input type="email" name="email" id="email">

      <label for="cidade">Cidade:</label>
      <input type="text" name="cidade" id="cidade">

      <label for="mensagem">Descrição do Conflito Ambiental:</label>
      <textarea name="mensagem" id="mensagem" cols="20" rows="10"></textarea>

      <div class="container-upload">
        <label for="upload-file" id="upload-area">
          <input type="file" accept="image/*" name="upload" id="upload-file" style="display: none;" multiple>
          <div id="preview-container">
            <img class="nuvem" src="../assets/contato/upload.svg">
            <p>Arraste e solte ou clique aqui <br> para fazer upload da imagem</p>
            <span>Carregue qualquer imagem</span>
            <div id="preview-image"></div>
          </div>
        </label>
      </div>
    </form>


    <div class="envio">
      <div class="g-recaptcha" data-sitekey="6LfeBBUpAAAAAHyWIqmQrwPDE_yKpMqovUqkzpyB"></div>

      <button class="abrir" name="enviar">Enviar</button>
    </div>

    <div class="container-recebido" id="popup">
      <div class="conteudo-recebido">
        <img src="../assets/logo.svg" alt="Logo IFRJ">
        <h2>Obrigado por compartilhar seu caso de conflito ambiental local!</h2>
        <p>Vamos revisar suas informações e, se apropriado, publicá-las em nosso site. Entraremos em
          contato, se necessário, e apreciamos seu apoio na conscientização e ação ambiental, sua
          contribuição é valiosa.
        </p>

        <button class="fechar">Fechar</button>
      </div>
    </div>


  </main>

  <script src="../js/enviado.js"></script>

  <footer class="rodape">

  </footer>



</body>

</html>