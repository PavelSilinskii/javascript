document.querySelector('#load').addEventListener('click',load)

function load(){
var url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)//запрос к серверу
   .then(function(response){ //promise
      return response.json()
   })
   .then(function(data){ //promise
      var ul = document.querySelector('#list')
   
      var html = data.map(function(item){
         return `<li>${item.id}  ${item.name} (${item.email})</li>`
      })
      
      ul.insertAdjacentHTML('afterbegin',html.join(' '))
      //console.log('Data',html.join(' '))


   })

}