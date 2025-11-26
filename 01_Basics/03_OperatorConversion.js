let score = "false"
// console.log(typeof score)
// console.log(typeof(score))

let checkNumber = Number(score)
// console.log(typeof score)
// console.log(checkNumber)

// "33" => 33
// "33adf" => NaN
// true => 1 , false => 0

let isLoggedIn = 1
let boolean = Boolean(isLoggedIn)

// console.log(boolean)

// 1 => true, 0 => false
// "" => false
// "Tushar" => true

let number = 33

let numberToString = String(number)
// console.log(number)
// console.log(typeof number)

// ***************************** Operations ******************************** //

let value = 2
let negvalue = -value

// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2) (most usage of %)

// console.log(2 + 2)
// console.log("2" + 2)
// console.log(1 + 2 + "2")
// console.log(2 + 2 + "2" + 2 + 2)
// console.log("2" + "2")

// console.log((3 + 4) * 5 % 3) // must be prefer (this)

// console.log(+true)
// console.log("" +)

let num1, num2, num3

// num1 = num2 = num3 = 2 + 2  // Not prefer this type because code is not readable for all

// let getCounter = 100
// ++getCounter; 
// console.log(getCounter);

// prefix
let x = 4
const y = ++x
console.log(x)
console.log(y)

// postfix
let a = 4
const b = x++
console.log(x)
console.log(y)
