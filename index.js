var str1 = 'Hello world' // предпочтительная запись
var str2 = "Hello world2"

var personName = 'Виктор'
var message='Человека зовут "'+ personName +'"'
var message2="Человека зовут '"+ personName +"'"
var message3='Человека зовут \''+ personName +'\''

console.log(str1)
console.log(str2)
console.log(message)
console.log(message2)
console.log(message3)

var newMessage = 'Hello world!!!'

console.log(newMessage.length)
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(1))
console.log(newMessage.indexOf('world'))
console.log(newMessage.indexOf('cat'))
console.log(newMessage.substr(1,4))
console.log(newMessage.substr(newMessage.indexOf('world'),5))
console.log(newMessage.substring(1,3))