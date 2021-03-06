let cartaUm = {
    nome: "Naruto Usumaki",
    imagem: "https://i.pinimg.com/736x/88/6f/b7/886fb779913e7b50911d532aa4b20432.jpg",
    atributos: {
        strength: 999,
        intelligence: 999,
        perception: 999
    }
}

let cartaDois = {
    nome: "Sasuki Uchiha",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHTeTL9JU3M_nMGPfFDTU2h2ZyvWg4I7Wbw&usqp=CAU",
    atributos: {
        strength: 210,
        intelligence: 290,
        perception: 280
    }
}

let cartaTres = {
    nome: "Sakura Haruno",
    imagem: "https://i.pinimg.com/originals/5e/8e/ac/5e8eac7b28585e1df04f3ea9c3ec696c.jpg",
    atributos: {
        strength: 200,
        intelligence: 180,
        perception: 100
    }
}

let cartaQuatro = {
    nome: "Obito Uchiha",
    imagem: "https://uploads.spiritfanfiction.com/fanfics/historias/202011/meu-amor-e-um-mascarado-obito-uchiha-21055043-201120201243.jpg",
    atributos: {
        strength: 250,
        intelligence: 380,
        perception: 200
    }
}

let cartaCinco = {
    nome: "Rock Lee",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2019/01/maxresdefault-12.jpg",
    atributos: {
        strength: 230,
        intelligence: 90,
        perception: 80
    }
}

let cartaSeis = {
    nome: "Sesto Hokage",
    imagem: "https://i.pinimg.com/originals/f1/de/3c/f1de3cdc23f8cbc94fccdbf0c3cdae1a.jpg",
    atributos: {
        strength: 200,
        intelligence: 380,
        perception: 200
    }
}

let cartaSete = {
    nome: "Gaara",
    imagem: "https://i.pinimg.com/originals/c2/f2/eb/c2f2ebb36eb49abda96bde0a56b69dbb.jpg",
    atributos: {
        strength: 190,
        intelligence: 380,
        perception: 500
    }
}

let cartaOito = {
    nome: "Itachi Uchiha",
    imagem: "https://preview.redd.it/s5jd73rvt5k51.jpg?width=640&crop=smart&auto=webp&s=b9729532fbefa3f4fcb26390e2048fdfd6bb07e6",
    atributos: {
        strength: 190,
        intelligence: 180,
        perception: 500
    }
}

let cartaNove = {
    nome: "Orochimaro",
    imagem: "https://pm1.narvii.com/6396/0b8a45258a8d741e4939a9446623cebc2faa2f9d_hq.jpg",
    atributos: {
        strength: 150,
        intelligence: 150,
        perception: 100
    }
}

let cartaDez = {
    nome: "Sai",
    imagem: "https://wallpaperaccess.com/full/3026280.jpg",
    atributos: {
        strength: 90,
        intelligence: 280,
        perception: 150
    }
}

let cartaOnze = {
    nome: "Shikamaru Nara",
    imagem: "https://i.pinimg.com/originals/c1/bb/8c/c1bb8c4045895685655c5835e84a7e70.jpg",
    atributos: {
        strength: 50,
        intelligence: 680,
        perception: 90
    }
}

let cartaDoze = {
    nome: "Madara Uchira",
    imagem: "https://i.pinimg.com/736x/32/2d/f9/322df99934f9b2ecc3088c54ca63a2eb.jpg",
    atributos: {
        strength: 500,
        intelligence: 500,
        perception: 500
    }
}


let cartaMaquina
let cartaJogador
let cartas = [cartaUm, cartaDois, cartaTres, cartaQuatro, cartaCinco, cartaSeis, cartaSete, cartaOito, cartaNove, cartaDez, cartaOnze, cartaDoze]
// 0          1           2

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 12)
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = parseInt(Math.random() * 12)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 12)
    }
    cartaJogador = cartas[numeroCartaJogador]


    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibirCartaJogador()
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador")
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    let opcoesTexto = ""

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo'style='margin-bottom:5px;margin-top:18px;' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    let html = "<div id='opcoes' class='carta-status'</div>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}



function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    let divResultado = document.getElementById('resultado')
    let atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        resultado = '<a class="resultado-final" href="https://github.com/ronald-assis/SuperTrunfo" target="_blank">Voc?? vai sobreviver</a>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        resultado = '<a class="resultado-final" href="https://github.com/ronald-assis/SuperTrunfo" target="_blank">Voc?? Morreu </a>'
    } else {
        resultado = '<a class="resultado-final" href="https://github.com/ronald-assis/SuperTrunfo" target="_blank">Empatou</a>'
    }
    divResultado.innerHTML = resultado

    document.getElementById('btnReset').disabled = false

    exibirCartaMaquina()

}
function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina")
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    let opcoesTexto = ""

    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    let html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function reset() {
    let divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""

    let divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style = ""
    
    let nomePersonagem = document.querySelectorAll('.carta-subtitle')
    for (let nome of nomePersonagem){
        nome.innerHTML= ""
    }
    let atributosPersonagem = document.querySelectorAll('.carta-status')
    for ( let atributo of atributosPersonagem){
        atributo.innerHTML= ""
    }
    let divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style = ""   
    sortearCarta()
}
alert("Sortei a carta, choose your attribute and just play. Logo ap??s jogar, click on the result.Then click restart for a new game!")
