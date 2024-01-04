

let b = [1,2,3,4,5,6,7,8,9,10]
let a = ["Subham", "Prasad", "Das"]

let c = a.push("The great") // adds element from back
console.log(a)
console.log(a.length)
console.log(c)

a.pop() // removes elements from the back
console.log(a)

a.shift()
console.log(a) // Removes the first element

a.unshift("Subham") // adds from the starting of the element
console.log(a)

console.log(a.indexOf("Das")) // finds the index of the specified element

console.log(a.includes("Das")) // searches for the specified element

console.log(a.concat("!")) // adds the specified element

a.sort() // sorts the elements
console.log(a)

delete b[4] // delete is an operator which deletes the element as per the specified index.
console.log(b)

const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";
console.log(fruits)