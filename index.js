// setTimeout(function(){
//    alert('hello timeout')
// }, 2*1000)

var counter = 0
var interval = setInterval(function(){
console.log (++counter)
}, 1000*2)

setTimeout(function(){
   clearInterval(interval)
},7*1000)