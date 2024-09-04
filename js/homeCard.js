console.log("done");

const gameCards = document.querySelectorAll('.game-card');
const audio = document.querySelectorAll('#elementaAudio');
const ball = document.querySelector('.game-page-container')
const wood = document.querySelector('.game-page-wood-container')
const clout = document.querySelector('.game-page-clout-container')
const txt = document.querySelector('.text-h1')

gameCards[0].addEventListener('click', () => {
    audio[0].play()
    ball.classList.add('game-page-active-container')

    wood.classList.remove('game-page-active-wood')
    clout.classList.remove('game-page-active-clout')

    txt.innerText = 'O N A I M'
    txt.style.marginLeft = '15px'
})

gameCards[1].addEventListener('click', () => {
    audio[1].play()
    wood.classList.add('game-page-active-wood')

    ball.classList.remove('game-page-active-container')
    clout.classList.remove('game-page-active-clout')
})

gameCards[2].addEventListener('click', () => {
    audio[2].play()
    clout.classList.add('game-page-active-clout')

    ball.classList.remove('game-page-active-container')
    wood.classList.remove('game-page-active-wood')
})

const card = document.querySelector('.ball-container')
const audios = document.querySelector("#audios")

card.addEventListener('click', () => clickCard)

function clickCard() {
    card.innerHTML = `
    <h3>O</h3>
    `
    audios.play()
    console.log("done card");
}

function clickWood() {
    document.querySelector('.wood-container').addEventListener('click', () => {
        document.querySelector('.wood-container').innerHTML = `<h3 style="color: white">T</h3>`
    })
}

function clickClout() {
    document.querySelector('.clout-container').addEventListener('click', () => {
        document.querySelector('.clout-container').innerHTML = `<h3 style="color: white">O'</h3>`
    })
}



