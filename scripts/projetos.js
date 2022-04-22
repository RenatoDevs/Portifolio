projetos = [
    {
        imagem: 'dsmovie',
        nome: 'DSMovie',
        descricao: 'Aplicação web para avaliação de filmes',
        link: 'dsmovie',
    },
    {
        imagem: 'barbearia',
        nome: 'BarberShop',
        descricao: 'Site modelo para uma barberaria',
        link: 'barberShop',
    },
    {
        imagem: 'studio-moveis-vendas',
        nome: 'StudioMoveis Store',
        descricao: 'Site modelo de uma loja de móveis online',
        link: 'studioMoveisStore',
    },
    {
        imagem: 'studio-moveis-plan',
        nome: 'StudioMoveis',
        descricao: 'Site modelo de uma empresa de móveis planejados',
        link: 'studioMoveisPlan',
    },
    {
        imagem: 'coca-cola',
        nome: 'Coca Cola',
        descricao: 'Site conceito coca-cola',
        link: 'cocaCola',
    },
    {
        imagem: 'churrascometro',
        nome: 'Churrascômetro',
        descricao: 'Site com uma cálculadora de recursos para um churrasco',
        link: 'churras',
    },

];

let boxProjetos = document.querySelector('#box-projetos');

function carregarProjetos() {

    projetos.forEach(projeto =>{
        //criando o item
        let item = document.createElement('div');
        item.classList.add('item');
        // criando div da imagem
        let boxImgProjeto = document.createElement('div');
        boxImgProjeto.classList.add('imgProjeto');
        // criando imagem
        let img = document.createElement('img');
        img.src = "./imagens/capas/" + projeto.imagem + ".png";
        //criando div da descrição
        let areaDesc = document.createElement('div');
        areaDesc.classList.add('descProjeto');
        // criando as tags 
        let boxNome = document.createElement('h2');
        boxNome.classList.add('subTitulo');
        let nome = document.createTextNode(projeto.nome);

        let boxDesc = document.createElement('p');
        let descricao = document.createTextNode(projeto.descricao);

        let a = document.createElement('a');
        a.classList.add('btMais');
        a.href = './paginas/' + projeto.link + '.html';
        let aDescricao = document.createTextNode("Saiba Mais");
        // inserindo os dados
        boxProjetos.appendChild(item);
        item.appendChild(boxImgProjeto);
        item.appendChild(areaDesc);
        boxImgProjeto.appendChild(img);
        areaDesc.appendChild(boxNome);
        areaDesc.appendChild(boxDesc);
        areaDesc.appendChild(a);

        boxNome.appendChild(nome);
        boxDesc.appendChild(descricao);
        a.appendChild(aDescricao);

});
}
