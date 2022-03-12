let order = []
let clickedOrder = []
let onMouseOrder = []
let score = 0;

/* 
    0- verde
    1- vermelho
    2- azul
    3- amarelo
*/

const green = document.querySelector('.green')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')

// função que gera a ordem do genius aleatóriamente
// let colorOrder = Math.floor(Math.random() * 4) guarda numero aleatório de cada rodada
let shuffleOrder = () => {
// {Math.random() * 4} gera um numero aleatório entra 0 e 5.
// Math.floor() arredonda para baixo, ou seja, numeros entre 0 e 4.
    let colorOrder = Math.floor(Math.random() * 4) 
    order[order.length] = colorOrder
    // order.push(colorOrder)
    clickedOrder = []

    // percorre o array de sorteio
    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

// acendendo a cor sorteada
let lightColor = (element, proporcao) => {
    proporcao = proporcao * 1000
    setTimeout(() => {
        element.classList.add('selected')
    }, proporcao - 500)
    setTimeout(() => {
        element.classList.remove('selected')
    }, proporcao)
}

// verificando se a ordem que o jogador clicou é a mesma ordem sorteada no Genius
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! iniciando próximo nível!!`)
    }
}

//função para o clique do jogador
let click = (color) => {
    
        clickedOrder[clickedOrder.length] = color
        // clickedOrder.push(color)
        createColorElement(color).classList.add('selected')
    
        setTimeout(()=> {
            createColorElement(color).classList.remove('selected')
            checkOrder()
        },200)
}

// função que retorna a color
let createColorElement = (color) => {
    if(color == 0) {
        return green
    } else if(color == 1) {
        return red
    } else if(color == 2) {
        return blue
    } else if(color == 3) {
        return yellow
    }
}

//fun~]ao para o próximo nível do jogo
let nextLevel = () => {
    score++
    shuffleOrder()
}

//função game over
let gameOver = () => {
    setTimeout(() => {
        alert(`Pontuação: ${score}\nClique em OK para iniciar novamente`)
        order = []
        clickedOrder = []
    
        playGame()
    }, 2000)
}

//função para iniciar o jogo Genius
let playGame = () => {
    alert('Bem-vindo ao Genius! Iniciando um novo jogo!!')
    score = 0;

    nextLevel()
}

//eventos de clique
    // blue.onmouseover = () => onMouseLight(2)

    green.onclick = () => click(0)
    red.onclick = () => click(1)
    blue.onclick = () => click(2)
    yellow.onclick = () => click(3)


playGame()