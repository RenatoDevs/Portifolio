certificados = [
    {
        nome: 'html parte 1',
        imagem: 'html-1',
    },
    {
        nome: 'html parte 2',
        imagem: 'html-2',
    },
    {
        nome: 'html parte 3',
        imagem: 'html-3',
    },
    {
        nome: 'JavaScript Basico',
        imagem: 'js-basico',
    },
    {
        nome: 'html-css-js',
        imagem: 'js-progbr'
    },
    {
        nome: 'Bootcamp  DevSuperior',
        imagem: 'dev-superior'
    },
    

];

let boxCertificados = document.querySelector('#box-certificados');

function carregarCertificados() {
    certificados.forEach(certificado => {
        //criando o item
        let item = document.createElement('div');
        item.classList.add('item');
        // criando div da imagem
        let boxImgCert = document.createElement('div');
        boxImgCert.classList.add('imgProjeto');
        // criando imagem do certificado
        let img = document.createElement('img');
        img.src = "./imagens/certificados/" + certificado.imagem + ".png";

        let areaDesc = document.createElement('div');
        areaDesc.classList.add('descProjeto');
        // criando div da imagem
        let descricao = document.createElement('h2');
        descricao.classList.add('subTitulo');
        let nome = document.createTextNode(certificado.nome);

        boxCertificados.appendChild(item);
        item.appendChild(boxImgCert);
        item.appendChild(areaDesc);
        boxImgCert.appendChild(img)
        areaDesc.appendChild(descricao)
        descricao.appendChild(nome)
    });
}
