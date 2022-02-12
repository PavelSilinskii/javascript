// let color = 'red'
// color = {color: 'blue'}
// console.log(color)

// for(var i = 0; i<5; i++){
//     console.log(i)
// }

//выводит одно конечное значение
// for(var i = 0; i<5; i++){
//     setTimeout(function(){
//         console.log(i)
//     },2000)
//    }

// выводит правильное значение на каждом шаге
   for(let i = 0; i<5; i++){
    setTimeout(function(){
        console.log(i)
    },2000)
   }

const HEX = '#FFAABB'// константа - запрет изменения
document.querySelector('h1').style.color = HEX
console.log(HEX)


const array = [1,2]
const obj = {a: 1}
array.unshift(4)
obj.b = 2
console.log(array)
console.log(obj)