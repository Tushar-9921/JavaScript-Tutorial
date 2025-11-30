const myHeros = ["Thor", "Iron man", "Spider man"]
const myHeros2 = ["Superman", "Flash", "Batman"]

// myHeros.push(myHeros2)
// console.log(myHeros[3][2])


/* Concate or Spred */

const allHeros = myHeros.concat(myHeros2) // Concate is used to Merge Array
// console.log(allHeros) 

// spred is like a glass
const myNewHeros = [...myHeros, ... myHeros2] // Spred is used to Merge Array
// console.log(myNewHeros)


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]

const realArray = anotherArr.flat(Infinity)  // flat => handle array 
console.log(anotherArr)
console.log(realArray)

 
console.log(Array.isArray("Tushar")) // Check it is array or not true/false
console.log(Array.from("Tushar")) // It convert value into array

console.log(Array.from({name: "tushar"})) // Most Important => Give blank array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
