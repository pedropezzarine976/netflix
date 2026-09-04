//const elemento = document.getElementById('filme-principal')

//console.log(elemento)
//console.log(elemento.tagName)

function selecionarPorId(){

const tituloFilme = document.getElementById('titulo-filme')

console.log(tituloFilme)
console.log(tituloFilme.tagName)
console.log(tituloFilme.textContent)
console.log(tituloFilme.id)

tituloFilme.classList.add("elemento-selecionado")

}                                                           

function selecionarPorClasse(){

    const elementos = document.getElementsByClassName('genero-acao')
    console.log(elementos.length)

    for(let i = 0; i < elementos.length; i++){

  console.log(elementos[i].textContent.trim())
    elementos[i].classList.add("elemento-selecionado")

    }
      
}

function selecionarPorQuery(){
    const elemento = document.querySelector('.filme-mini')
    console.log(elemento)
    elemento.classList.add('elemento-selecionado')
}


function selecionarTodos(){
    const elementos = document.querySelectorAll('.fime-mini')

elementos.forEach( (el, indice)=>  {
    console.log(indice, el.textContent.trim())
    el.classList.add('elemento-selecionado')
}
)
}


function mudarTexto(){
    const titulo = document.getElementById('titulo-destaque')

    titulo.textContent = document.getElementById('input-busca').value
    
    console.log("novo Teste", titulo.textContent)
}

function adicionarBadge(){
    const badge = document.createElement('span')

    badge.className = 'badge'
    badge.textContent = "⭐ em alta"

    const container = document.getElementById("badge-container")

    container.innerHTML = ''

    container.appendChild(badge)
}
function mudarPoster(){

    const poster = document.getElementById('poster-destaque')
    const titulo = document.getElementById("titulo-destaque")

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


    const sorteado = opcoes[Math.floor(Math.random() *opcoes.length)];

    poster.src=sorteado.url
    poster.alt = sorteado.nome
    titulo.textContent = sorteado.nome

    console.log("poster trocado para: " + sorteado.nome)

    poster.style.opacity = "0"
    poster.style.transition = "opacity 0.3s";

    setTimeout( ()=>{

        poster.style.opacity = '1';
        poster.classList.add("poster-fade-in")

        setTimeout(()=> poster.classList.remove("poster-fade-in"), 600 )
      
    }
),300
}

function lerInput(){
    const input = document.getElementById('input-busca').value.trim()

    if(input === ""){
        alert("💀💀💀 digite algo")
    }

    const titulo = document.getElementById("titulo-destaque")

    titulo.textContent = input

    titulo.classList.add("texto-animado")}


 