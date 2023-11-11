<?php
  session_start();
  if(empty($_SESSION)){
    header("Location: index.html");
  }
    
  


?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, 
				initial-scale=1.0"
    />
    <title>DashBoard</title>
    <link rel="stylesheet" href="dashboard-Main.css" />
    <link rel="stylesheet" href="dashboard-Responsive.css" />
  </head>

  <body>
    <!-- for header part -->
    <header>
      <div class="logosec">
        <div class="logo">Menu</div>
        <img
          src="icons/barra-de-menu.png"
          class="icn menuicn"
          id="menuicn"
          alt="menu-icon"
        />
      </div>

      <div class="searchbar">
        <input type="text" placeholder="Search" />
        <div class="searchbtn">
          <img
            src="icons/procurar.png"
            class="icn srchicn"
            alt="search-icon"
          />
        </div>
      </div>

      <div class="message">
        <div class="circle"></div>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
          class="icn"
          alt=""
        />
        <div class="dp">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
            class="dpicn"
            alt="dp"
          />
        </div>
      </div>
    </header>

    <div class="main-container">
      <div class="navcontainer">
        <nav class="nav">
          <div class="nav-upper-options">
            <div class="nav-option option1">
              <img
                src="icons/painel-de-controle.png"
                class="nav-img"
                alt="dashboard"
              />
              <h3>Dashboard</h3>
            </div>

            <div class="option2 nav-option">
              <img src="icons/jornal.png" class="nav-img" alt="artigos" />
              <h3>Artigos</h3>
            </div>

            <div class="nav-option option3">
              <img src="icons/adicionar.png" class="nav-img" alt="reportar" />
              <h3>Reportar</h3>
            </div>

            <div class="nav-option option4">
              <img src="icons/banco.png" class="nav-img" alt="instituição" />
              <h3>Instituição</h3>
            </div>

            <div class="nav-option option5">
              <img
                src="icons/gerenciamento-de-projetos.png"
                class="nav-img"
                alt="blog"
              />
              <h3>Perfil</h3>
            </div>

            <div class="nav-option option6">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                class="nav-img"
                alt="config"
              />
              <h3>Config</h3>
            </div>

            <div class="nav-option logout">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                class="nav-img"
                alt="Desconectar"
              />
              <a href="../logout.php" style="color: inherit; text-decoration: none;"><h3>Desconectar</h3></a>
            </div>
          </div>
        </nav>
      </div>
      <div class="main">
        <div class="searchbar2">
          <input type="text" name="" id="" placeholder="procurar" />
          <div class="searchbtn">
            <img src="" class="icn srchicn" alt="search-button" />
          </div>
        </div>

        <div class="box-container">
          <div class="box box1">
            <div class="text">
              <h2 class="topic-heading">60.5k</h2>
              <h2 class="topic">Views dos artigos</h2>
            </div>

            <img src="icons/olho.png" alt="Views" />
          </div>

          <div class="box box2">
            <div class="text">
              <h2 class="topic-heading">150</h2>
              <h2 class="topic">Likes</h2>
            </div>

            <img src="icons/gostar.png" alt="likes" />
          </div>

          <div class="box box3">
            <div class="text">
              <h2 class="topic-heading">320</h2>
              <h2 class="topic">E-mails</h2>
            </div>

            <img src="icons/o-email.png" alt="comments" />
          </div>

          <div class="box box4">
            <div class="text">
              <h2 class="topic-heading">70</h2>
              <h2 class="topic">Publicações</h2>
            </div>

            <img src="icons/verificado.png" alt="published" />
          </div>
        </div>

        <div class="report-container">
          <div class="report-header">
            <h1 class="recent-Articles">Recent Articles</h1>
            <button class="view">Ver todos</button>
          </div>

          <div class="report-body">
            <div class="report-topic-heading">
              <h3 class="t-op">Artigos</h3>
              <h3 class="t-op">Views</h3>
              <h3 class="t-op">comentários</h3>
              <h3 class="t-op">Status</h3>
            </div>

            <div class="items">
              <div class="item1">
                <h3 class="t-op-nextlvl">Artigos 73</h3>
                <h3 class="t-op-nextlvl">2.9k</h3>
                <h3 class="t-op-nextlvl">210</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 72</h3>
                <h3 class="t-op-nextlvl">1.5k</h3>
                <h3 class="t-op-nextlvl">360</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 71</h3>
                <h3 class="t-op-nextlvl">1.1k</h3>
                <h3 class="t-op-nextlvl">150</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 70</h3>
                <h3 class="t-op-nextlvl">1.2k</h3>
                <h3 class="t-op-nextlvl">420</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 69</h3>
                <h3 class="t-op-nextlvl">2.6k</h3>
                <h3 class="t-op-nextlvl">190</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 68</h3>
                <h3 class="t-op-nextlvl">1.9k</h3>
                <h3 class="t-op-nextlvl">390</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 67</h3>
                <h3 class="t-op-nextlvl">1.2k</h3>
                <h3 class="t-op-nextlvl">580</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 66</h3>
                <h3 class="t-op-nextlvl">3.6k</h3>
                <h3 class="t-op-nextlvl">160</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>

              <div class="item1">
                <h3 class="t-op-nextlvl">Artigo 65</h3>
                <h3 class="t-op-nextlvl">1.3k</h3>
                <h3 class="t-op-nextlvl">220</h3>
                <h3 class="t-op-nextlvl label-tag">Published</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="dashboard.js"></script>
  </body>
</html>
