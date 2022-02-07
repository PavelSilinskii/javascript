var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var score = 0

$start.addEventListener('click',startGame)
$game.addEventListener('click',handleBoxClick)


function startGame(){
    $game.style.backgroundColor = 'white'
    $start.classList.add('hide')

    renderBox()
}

function handleBoxClick(event){
if(event.target.dataset.box){
score++
renderBox()
}
}

function renderBox(){
$game.innerHTML = '' //очистка поля

var box = document.createElement('div')// создание элемента
box.style.height = box.style.width ='50px'
box.style.position = 'absolute'
box.style.backgroundColor='#000'
box.style.top = '50px'
box.style.left = '120px'
box.style.cursor = 'pointer'
box.setAttribute('data-box','true')

$game.insertAdjacentElement('afterbegin',box)

}