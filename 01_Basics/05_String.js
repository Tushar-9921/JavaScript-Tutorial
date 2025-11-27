const name = "Tushar"
const num = 14

// console.log("My name is: " + name + " Your Number is: " + num)

// console.log(`My name is: ${name} My Number is: ${num}`)

const emailId = new String("tushar@gmail.com")
console.log(emailId[0]) // access Key Value pair
console.log(emailId.__proto__) // access Prototype

console.log(typeof emailId)

console.log(name.toUpperCase()) // Not change Original value because it is Primitive Datatype

console.log(name.charAt(4))
console.log(name.indexOf("T"))