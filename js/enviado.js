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
        method: "POST",
        body: infoForm,
    });

    const resposta = await info.json();
    console.log(resposta);
})

fecharPopUp.addEventListener('click', () => {
    exibirPopUp.style.display = 'none';
    formContato.reset();

    // Limpa apenas as miniaturas dentro do contêiner de pré-visualização
    const thumbnails = previewImage.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.remove();
    });

    // Exibe o contêiner de pré-visualização vazio
    document.getElementById('preview-container').style.display = '';

    // Exibe os elementos de texto e a nuvem dentro do #upload-area
    const uploadArea = document.getElementById('upload-area');
    const textElements = uploadArea.querySelectorAll('p, span, .nuvem');
    for (const textElement of textElements) {
        textElement.style.display = '';
    }
});





// SCRIPT DO PREVIEW DAS IMAGENS NO UPLOAD

const dropArea = document.getElementById('upload-area');
const uploadFile = document.getElementById('upload-file');
const previewImage = document.getElementById('preview-image');

uploadFile.addEventListener("change", uploadImages);

function uploadImages() {
    // Limpa o conteúdo anterior
    previewImage.innerHTML = "";

    // Exibe o #preview-container
    document.getElementById('preview-container').style.display = 'block';

    // Oculta os elementos de texto e a nuvem dentro do #upload-area
    const uploadArea = document.getElementById('upload-area');
    const textElements = uploadArea.querySelectorAll('p, span, .nuvem');
    for (const textElement of textElements) {
        textElement.style.display = 'none';
    }

    // Adiciona as miniaturas até atingir o limite desejado (por exemplo, 6)
    const maxThumbnails = 10; // Altere conforme necessário
    for (let i = 0; i < Math.min(uploadFile.files.length, maxThumbnails); i++) {
        const file = uploadFile.files[i];
        const imgLink = URL.createObjectURL(file);
        const thumbnail = createThumbnail(imgLink);
        previewImage.appendChild(thumbnail);
    }
}

dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    uploadFile.files = e.dataTransfer.files;
    uploadImages();
});

function createThumbnail(imgLink) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');

    const img = document.createElement('img');
    img.src = imgLink;

    thumbnail.appendChild(img);

    return thumbnail;
} 