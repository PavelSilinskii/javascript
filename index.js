var divs = document.querySelectorAll('div')
var link = document.querySelector('a')

for(var i = 0; i < divs.length; i++){
 divs[i].addEventListener('click', function(event){
     event.stopPropagation()
     console.log(this.getAttribute('id'))
 })   
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event) {
    event.preventDefault()

    var div = divs[0]

    // if(div.style.display==='none'){
    //     div.style.display = 'flex'
    // }else{
    //     div.style.display = 'none'
    // }

    //в виде тернарного выражения
    div.style.display = div.style.display === 'none'
    ? 'flex'
    : 'none'
    
}