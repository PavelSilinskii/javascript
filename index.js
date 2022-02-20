function sleep(ms){
   return new Promise(function(resolve){
      setTimeout(function(){
         resolve()
      },ms)
   })
}


// sleep(1500).then(function(){
//    console.log('1500')
// })

// sleep(3000).then(function(){
//    console.log('3000')
// })

// Promise.all([sleep(1500), sleep(3000)]).then(function(){ // запускается при последнем promise
//    console.log('All')
// })

// Promise.race([sleep(1500), sleep(3000)]).then(function(){ // запускается при первом promise
//    console.log('Race')
// })

var p1= sleep(1500).then(function(){
   return{
      name: 'Promise 1500'
   }
})

var p2= sleep(3000).then(function(){
   return{
      name: 'Promise 3000'
   }
})
var p3= sleep(4000).then(function(){
   return{
      name: 'Promise 4000'
   }
})

async function start(){
// Promise.all([p1,p2,p3]).then(function(data){
//    console.log('All',data)
// })

// Promise.race([p1,p2]).then(function(data){
//    console.log('All',data)
// })

var dataAll = await Promise.all([p1, p2, p3])
var dataRace = await Promise.race([p1, p2])
console.log('dataAll',dataAll)
console.log('dataRace',dataRace)
}

start()