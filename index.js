var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

$start.addEventListener('click',startGame)

function startGame(){
    $game.style.backgroundColor = 'white'
    $start.classList.add('hide')

    renderBox()
}

function renderBox(){

}