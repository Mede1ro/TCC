<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <link rel="shortcut icon" href="assets/logo.svg" type="image/x-icon">
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <title>Observatório de Conflitos Ambientais da Região dos Lagos</title>

</head>

<body>
  <header class="cabecalho">
    <a class="cabecalho-imagem" href="index.php"><img src="assets/logo.svg" alt="Logo do IFRJ">Observatório dos
      Conflitos Ambientais</a>
    <nav class="cabecalho-menu ">
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="index.php">Inicio</a>
      </li>
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="pages/atualizacoes.php">Atualizações</a>
      </li>
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="pages/sobre.php">Sobre</a>
      </li>
      <li class="cabecalho-menu-item">
        <a class="cabecalho-menu-item-links" href="pages/contato.php">Contato</a>
      </li>
    </nav>
  </header>

  <main class="container-inicio">
    <div class="conteudo-inicio">
      <h1>Mapa dos Conflitos Ambientais na <span>Região do Lagos</span></h1>
      <div id="map"></div>

    </div>


  </main>

  <footer class="rodape">

  </footer>

  <script src="js/mapa.js"></script>
</body>

</html>