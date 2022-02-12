// function getAge(year){
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(getAge(1983))

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//      return current - year
// }
//  console.log(calculateAge(1981))

// const getAge = year =>{
//      const current = new Date().getFullYear()
//      return current - year   
// }
// console.log(getAge(1979))

// const getAge = year => new Date().getFullYear() - year   
// console.log(getAge(2002))

// const logAge = year => console.log(new Date().getFullYear() - year) 
// logAge(2016)


// const person = {
//     age: 25,
//     firstName: 'Maxim',
//     logNameWithTimeout:function(){
//         setTimeout(function(){
//             console.log(this.firstName)
//         }.bind(this),1000)
//     }
// }

const person = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout(){
        setTimeout(()=>{
            console.log(this.firstName)
        },1000)
    }
}
person.logNameWithTimeout()