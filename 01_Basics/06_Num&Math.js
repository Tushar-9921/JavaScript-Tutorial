const score = 1050
// console.log(score)

const bankBalance = new Number(400) // Number is an object 
// console.log(bankBalance)
// console.log(typeof bankBalance)
// console.log(bankBalance.toFixed(2)) 

const anotherNumber = new Number(54323.553587)
// console.log(anotherNumber.toPrecision(7))

const secondNumber = 7800004641
// console.log(secondNumber.toLocaleString('en-IN'))
// console.log(secondNumber.toFixed(5))
// console.log(secondNumber.toLocaleString())

// ++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++


console.log(Math)

const num = -52
// console.log(Math.abs(num))

// console.log(Math.round(5.5)) // Round Figure

// console.log(Math.ceil(5.2)) // Top

// console.log(Math.floor(5.7)) // Bottom

// console.log(Math.sqrt(36)) 

// console.log(Math.pow(2,8))

// console.log(Math.min(1, 2, 3, 4, 5, 6))

// console.log(Math.max(1, 2, 3, 4, 5, 6))

// ---------------------------------------------------------------------------------------------
// Math.randon() => Function give values under 0 to 1 

// console.log(Math.random() + 1) // +1 give guranteed It is not zero value give

console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min)) + min)