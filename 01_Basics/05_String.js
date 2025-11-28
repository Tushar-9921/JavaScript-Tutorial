const name = "Tushar"
const myPass = "9921"

// console.log("My name is : " + name + " Your Password is: " + myPass)

console.log(`My name is : ${name.toUpperCase()} , and password is ${myPass}`)
// console.log(typeof myPass)

const myGame = new String("Gta-5-v-inhance-version") // String is an Object

console.log(myGame)
console.log(myGame[2]) // Key,Value pair access
console.log(typeof myGame); // String as Object
console.log(myGame.__proto__) // access Prototype

console.log(myGame.toLowerCase()) // Access String Methods
console.log(myGame.toUpperCase()) 
console.log(myGame.at(4))
console.log(myGame.charAt(2)) // Give number to show his Character
console.log(myGame.indexOf('t')) // Give Character to show his length Number
// console.log(myGame.padEnd())
// console.log(myGame.lastIndexOf(5))
console.log(myGame.bold())
console.log(myGame.fontcolor("red"))

// Slice String

const sliceStr = myGame.substring(0,3)
console.log(sliceStr)

const anotherStr = myGame.slice(-5, 2)
console.log(anotherStr)


const myNewString = "     Bhavesh     "
console.log(myNewString)
console.log(myNewString.trim()) // Remove space from both side

const url = "https://trparmar%209921/home/repo"
console.log(url.replace('%20','-')) // Replace string
console.log(url.includes("9921")) // include or not


console.log(myGame.split('-')) // String convert into array
