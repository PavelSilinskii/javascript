console.log(42)
console.log(-42)
console.log(1.5)
console.log(-8 / 3)
console.log(0xAB)
console.log(2e3) //2 умножаем на 10 в 3 степени
console.log(NaN)
console.log(typeof NaN)
console.log(123/0)

var fortyTwo = 42
var delta = 8 / 3
console.log(fortyTwo.toString())
console.log(+delta.toFixed(1) + 4) //чтобы оставить тип число добавляем +
console.log(parseFloat(delta.toFixed(1)))
console.log(parseInt(delta.toFixed(1)))

console.log(isNaN(NaN))
console.log(isNaN(45))

console.log(isFinite(1/0)) //число бесконечно false
console.log(isFinite(99999999999999))
