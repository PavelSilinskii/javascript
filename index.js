var cars = [
    'Ford',
    'Mazda',
    'Audi',
    'Kia'
]
var any =[
    42,'Apple',{a:1}
]

console.log(cars)
console.log(any)
console.log(cars[2])
console.log(cars.length)


cars.push('BMW')
console.log(cars)

//удаляет и возвращает последний элемент
bmw = cars.pop()
console.log(cars,bmw)

//удаляет и возвращает первый элемент
ford = cars.shift()
console.log(cars,ford)

//добавляет в начало
cars.unshift(bmw)
console.log(cars)

var index = cars.indexOf('Audi')
var audi = cars[index]

console.log(audi)