const container = document.querySelector('.catalogo')
fetch('http://localhost:3000/usuario/filmes', {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('logado')}`,
            'Access-Control-Allow-Origin': "*",
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(filme => {
            const card = document.createElement('div');
            card.setAttribute('class', 'catalogo-pai');

            const titulo = document.createElement('p');
            titulo.innerHTML = filme.nome;

            const imagem = document.createElement('img');
            imagem.setAttribute('class', 'catalogo-pai-img');
            imagem.setAttribute('src', filme.imagem)

            const estrela = document.createElement('div')
            estrela.setAttribute('class', 'catalogo-pai-estrela');

            card.appendChild(titulo);
            card.appendChild(imagem);
            for (let i = 0; i < filme.estrelas; i++) {
                const estrelaimg = document.createElement('img');
                estrelaimg.setAttribute('class', 'img-estrela')
                estrelaimg.setAttribute('src', 'assets/img/star.png');
                estrela.appendChild(estrelaimg);
            }
            card.appendChild(estrela);
            container.appendChild(card);
        });
    })

const botaoCadastrar = document.querySelector('.btn-cadastro-filme');