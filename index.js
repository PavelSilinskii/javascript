document.querySelector('button').addEventListener('click',function(event){
    
    var value = document.querySelector('input').value

    var obj = {
        text:'объект в localStorage'
    }

    localStorage.setItem('headerTextObj',JSON.stringify(obj))

    localStorage.setItem('headerText',value)

})

document.addEventListener('DOMContentLoaded',function(){
    
    var obj = {} //undefined
    try{
     obj = JSON.parse(localStorage.getItem('headerTextObj'))
    } catch(e){}

    if(obj && obj.text && obj.text.trim()){
        document.querySelector('h2').textContent = obj.text
        }

    var text  = localStorage.getItem('headerText')
    
    if(text && text.trim()){
    document.querySelector('h1').textContent = text
    }
})