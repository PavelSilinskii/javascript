var person = {
    name : 'Max',
    age : 26,
    car:{
        model: 'Ford'
    },
    job: 'FrontEnd',
    friends: ['Elena', 'Igor']
}

var str = JSON.stringify(person) // преобразование в строку
console.log(str)

var obj2 =JSON.parse(str) //преобразование в объект
console.log(obj2)
