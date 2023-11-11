const formContato = document.getElementById('form');
const iniciarPopUp = document.querySelector('.abrir');
const exibirPopUp = document.querySelector('.container-recebido'); 
const fecharPopUp = document.querySelector('.fechar');

    iniciarPopUp.addEventListener('click', async (e) => {
        e.preventDefault();
        exibirPopUp.style.display = 'flex'

        const infoForm = new FormData(formContato);
        infoForm.append('add', 1);

        const info = await fetch("../redirecionamento/envio.php", {
            method:"POST",
            body: infoForm,
        });

      const resposta = await info.json();
      console.log(resposta);
    })

    fecharPopUp.addEventListener('click', () => {
        exibirPopUp.style.display = 'none'
    })