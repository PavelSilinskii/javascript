var a = document.querySelector('a')
var oldHref = a.getAttribute('href')
var oldTitle = a.getAttribute('title')

a.setAttribute('href','https://yandex.ru')
a.setAttribute('title','Go Yandex')
a.textContent = 'Yandex'
console.log(a.attributes)
