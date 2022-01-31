/*


&&(и) -  / true если все значения true
||(или) -  / true если хоть одно значения true
! (нет) - инвертирует true в false
*/ 

console.log('true && true',true && true)
console.log('true && false',true && false)

console.log('true || false',true || false)
console.log('false || false',false || false)

console.log('!false',!false)
console.log('!true',!true)

console.log('!!true',!!true)

console.log('(false && true) || (true || false) || !true',(false && true) || (true || false) || !true)
// false || true || false => true