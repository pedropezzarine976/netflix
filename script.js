function selecionarPorId() {

    const tituloFilme = document.getElementById('titulo-filme');

    console.log(tituloFilme);
    console.log(tituloFilme.tagName); // H3
    console.log(tituloFilme.textContent); // conteúdo do H3
    console.log(tituloFilme.id); // titulo-filme

    // Adiciona uma classe no elemento
    tituloFilme.classList.add('elemento-selecionado');
}


// getElementsByClassName -> retorna uma lista de todos os elementos existentes
function selecionarPorClasse() {

    const elementos = document.getElementsByClassName('genero-acao');

    console.log('Quantidade: ' + elementos.length);

    for (let i = 0; i < elementos.length; i++) {

        console.log(elementos[i].textContent.trim());

        elementos[i].classList.add('elemento-selecionado');
    }
}


// querySelector -> retorna o PRIMEIRO elemento
function selecionarPorQuery() {

    const elemento = document.querySelector('.filme-mini');

    console.log(elemento);

    if (elemento) {
        elemento.classList.add('elemento-selecionado');
    }
}


// querySelectorAll -> retorna TODOS os elementos encontrados
function selecionarTodos() {

    const elementos = document.querySelectorAll('.filme-mini');

    elementos.forEach((el, indice) => {

        console.log(indice, el.textContent.trim());

        el.classList.add('elemento-selecionado');
    });
}


function mudarTexto() {

    const titulo = document.getElementById('titulo-destaque');
    const input = document.getElementById('input-busca');

    titulo.textContent = input.value;

    console.log('Novo Texto:', titulo.textContent);
}


function adicionarBadge() {

    // Criar o elemento
    const badge = document.createElement('span');

    badge.className = 'badge';
    badge.textContent = '⭐ Em Alta';

    // Procurar o container
    const container = document.getElementById('badge-container');

    // Remove tudo que estiver dentro do container
    container.innerHTML = '';

    // Adiciona o badge
    container.appendChild(badge);
}


function mudarPoster() {

    const poster = document.getElementById('poster-destaque');
    const titulo = document.getElementById('titulo-destaque');

    const opcoes = [
        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },
        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        }
    ];

    // Escolhe um filme aleatório
    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];

    // Troca imagem e título
    poster.src = sorteado.url;
    poster.alt = sorteado.nome;
    titulo.textContent = sorteado.nome;

    console.log('Poster trocado para:', sorteado.nome);

    // Efeito de fade
    poster.style.opacity = '0';
    poster.style.transition = 'opacity 0.3s';

    setTimeout(() => {

        poster.style.opacity = '1';

        poster.classList.add('poster-fade-in');

        // Remove a classe depois de 600ms
        setTimeout(() => {
            poster.classList.remove('poster-fade-in');
        }, 600);

    }, 300);
}


function lerInput() {

    const input = document
        .getElementById('input-busca')
        .value
        .trim();

    if (input === '') {
        alert('⚠️ Digite algo no campo!');
        return;
    }

    const titulo = document.getElementById('titulo-destaque');

    titulo.textContent = input;

    titulo.classList.add('texto-animado');
}


function adicionarFilme() {

    const input = document
        .getElementById('input-filme')
        .value
        .trim();

    if (input === '') {
        alert('⚠️ Digite o nome de um filme.');
        return;
    }

    // Criar o LI
    const li = document.createElement('li');

    // Criar o SPAN
    const span = document.createElement('span');

    span.textContent = input;

    // Criar botão
    const btnRemover = document.createElement('button');

    btnRemover.textContent = 'Remover';

    // Adicionar elementos dentro do LI
    li.appendChild(span);
    li.appendChild(btnRemover);

    // Pegar a lista
    const lista = document.getElementById('minha-lista');

    // Adicionar o LI na lista
    lista.appendChild(li);

    // Botão remover
    btnRemover.onclick = function () {
        this.parentElement.remove();
    };

    // Limpar input
    document.getElementById('input-filme').value = '';
}


// Lista de filmes
const todosFilmes = [
    {
        nome: 'Stranger Things',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg'
    },
    {
        nome: 'Breaking Bad',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg'
    },
    {
        nome: 'The Witcher',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg'
    },
    {
        nome: 'La Casa de Papel',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg'
    },
    {
        nome: 'Round 6',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg'
    },
    {
        nome: 'Peaky Blinders',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/i0uajcHH9yogXMfDHpOXexIukG9.jpg'
    },
    {
        nome: 'Wednesday',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg'
    },
    {
        nome: 'The Last of Us',
        tipo: 'Série',
        img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
    },
    {
        nome: 'Oppenheimer',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
    },
    {
        nome: 'Barbie',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'
    },
    {
        nome: 'Duna',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg'
    },
    {
        nome: 'Coringa',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
    },
    {
        nome: 'A Origem',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
    },
    {
        nome: 'Interestelar',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
        nome: 'Parasita',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    },
    {
        nome: 'Vingadores: Ultimato',
        tipo: 'Filme',
        img: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
    }
];


// Inicializar galeria
function inicializarGaleria() {

    const galeria = document.getElementById('galeria-filmes');

    if (!galeria) {
        return;
    }

    // Evita duplicar os cards
    galeria.innerHTML = '';

    todosFilmes.forEach(function (filme) {

        const card = document.createElement('div');

        card.className = 'card-galeria';

        // Aqui usamos "nome", porque o filtro também vai procurar "nome"
        card.dataset.nome = filme.nome;

        card.innerHTML = `
            <img
                src="${filme.img}"
                alt="${filme.nome}"
                onerror="this.style.background='#2a2a2a'"
            >

            <div class="card-nome">
                ${filme.nome}
            </div>

            <div class="card-tipo">
                ${filme.tipo}
            </div>
        `;

        galeria.appendChild(card);
    });
}


// Filtrar filmes
function filtrarFilmes(termoBusca) {

    const termo = termoBusca.toLowerCase().trim();

    const cards = document.querySelectorAll('.card-galeria');

    let visiveis = 0;

    cards.forEach(function (card) {

        const nomeDoFilme = card.dataset.nome.toLowerCase();

        const combina =
            termo === '' ||
            nomeDoFilme.includes(termo);

        if (combina) {

            card.classList.remove('oculto');

            visiveis++;

        } else {

            card.classList.add('oculto');
        }
    });


    // Mensagem quando não encontrar resultados
    const semResultado = document.getElementById('sem-resultado');

    if (semResultado) {

        semResultado.style.display =
            visiveis === 0 ? 'block' : 'none';
    }
}


// Eventos da página
document.addEventListener('DOMContentLoaded', function () {

    // Inicializa a galeria
    inicializarGaleria();


    // Card favorito
    const cardFavorito = document.getElementById('card-favorito');
    const statusFavorito = document.getElementById('status-favorito');

    if (cardFavorito && statusFavorito) {

        cardFavorito.addEventListener('click', function () {

            statusFavorito.textContent = '❤️ FAVORITADO!';
        });
    }


    // Card detalhes
    const cardDetalhes = document.getElementById('card-detalhes');
    const statusDetalhes = document.getElementById('status-detalhes');

    if (cardDetalhes && statusDetalhes) {

        cardDetalhes.addEventListener('dblclick', function () {

            statusDetalhes.textContent = 'Carregando...';

            statusDetalhes.style.color = '#ffd700';


            setTimeout(() => {

                statusDetalhes.textContent = 'Detalhes carregados!';

                statusDetalhes.style.color = '#00ff88';

            }, 1000);
        });
    }


    // Campo de busca
    const inputBusca = document.getElementById('input-busca');

    if (inputBusca) {

        inputBusca.addEventListener('input', function () {

            filtrarFilmes(this.value);
        });
    }
});
