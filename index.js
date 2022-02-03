var a = document.querySelector('a')
var oldHref = a.getAttribute('href')
var oldTitle = a.getAttribute('title')

a.setAttribute('href','https://yandex.ru')
a.setAttribute('title','Go Yandex')
a.textContent = 'Yandex'

var box1 =document.querySelector('#box1')
var box2 =document.querySelector('#box2')

box1.classList.add('red')

var hasClass = box2.classList.contains('blue')
console.log(hasClass)

if(hasClass){
    box2.classList.remove('blue')
}else{
    box2.classList.add('blue')
}