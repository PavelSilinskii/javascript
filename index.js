// var createCounter = function(counterName){
//    var counter = 0
 
//     return function(){
//         console.log(counterName, ++counter)
//     }
// }

// var counterA = createCounter('Counter A')
// var counterB = createCounter('Counter B')

// console.log(counterA())
// console.log(counterA())
// console.log(counterB())
// console.log(counterA())
// console.log(counterB())

var createCounter = function(counterName){
    var counter = 0
  
     return {
         incriment: function(){
             counter++
         },
         decrement: function(){
             counter--
         },
         getCounter: function(){
             return counter
         }
     }
 }

var counterA = createCounter('Counter A')
var counterB = createCounter('Counter B')

counterA.incriment()
counterA.incriment()
counterA.incriment()

counterB.decrement()
counterB.decrement()

console.log(counterA.getCounter())
console.log(counterB.getCounter())