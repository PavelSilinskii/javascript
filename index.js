var str = '1,2,3,4,5,6,7,8'

var array = str.split(',') //строку в массив

console.log(array)

console.log(array.join(';')) //массив в строку
console.log(array.reverse())  //перевораичвает массив
array.reverse()

array.splice(0,1) //удаляет символы с позиции
console.log(array)

// array.splice(0,1,'11')
// console.log(array)

array.splice(1,0,'11','22') // вставляет символы с позиции
console.log(array)

var newArray = array.concat(['1','2']) // объединяет массивы
console.log(newArray)

var objArr=[
    {name:'Max',age:27},
    {name:'Elena',age:18},
    {name:'Viktor',age:20}
]

console.log(objArr)

var foundPerson = objArr.find(function(person){
    //console.log(person)
    return person.age===20
})
console.log(foundPerson)

var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
    return i % 2 !==0
})
console.log(oddArray)

var numArray = array.map(function(i){
    return parseInt(i)
})

console.log(numArray)