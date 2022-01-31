/*
&&(и) -  / true если все значения true
||(или) -  / true если хоть одно значения true
! (нет) - инвертирует true в false
*/ 

var currentYear = 2022
var carName = 'Ford'
var carYear = 2019
var carAge = currentYear - carYear

// если возраст машины меньше 5 лет ...
// если в.м больше или равно 5лет и меньше или равно 10 лет ...
// иначе другое значение

if(carAge < 5){
console.log(carName + ' младше 5 лет')
}else if( carAge>=5 && carAge <= 10){
  console.log(carName + ' больше или равен 5 годам или меньше  или равен 10 годам')  
}else{
    console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам')
}

//false
if(0){
console.log('Значение true')
} else {
console.log('Значение false')
}

if(null){
    console.log('Значение true')
    } else {
    console.log('Значение false')
    }

if(undefined){
        console.log('Значение true')
        } else {
        console.log('Значение false')
        }
var empty = ''
 if(empty){
console.log('Значение true')
 } else {
console.log('Значение false')
}

if(NaN){
console.log('Значение true')
} else {
console.log('Значение false')
}

//true
var str = 'Hello'
if(1){
    console.log('Значение true')
    } else {
    console.log('Значение false')
    }

//Тернарные выражения
1 ? console.log('Значение true') : console.log('Значение false')
str ? console.log('Значение true') : console.log('Значение false')
!((false||false) || !true) ? console.log('Значение true') : console.log('Значение false')


var personAge = 16
var message

if(personAge<18){
    message='Человек еще несовершенолетний'
}else{
    message='Человек совершенолетний' 
}
console.log(message)

var message = personAge< 18 ? 'Человек еще несовершенолетний' : 'Человек совершенолетний'
console.log(message)