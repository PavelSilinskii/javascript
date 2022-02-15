const createLink = ({path,name})=> `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector('ul')

const yandex = '<li>'+createLink({path:'https://yandex.ru',name:'Yandex'})+'</li>'
const google = `<li>${createLink({path:'https://google.com',name:'Google'})}</li>` //шаблонизатор javascript


ul.insertAdjacentHTML('afterbegin',google)
ul.insertAdjacentHTML('afterbegin',yandex)

const strToLog = `
   Hello
   world
      I am  
      New tab
`//сохраняет форматирование

console.log(strToLog)