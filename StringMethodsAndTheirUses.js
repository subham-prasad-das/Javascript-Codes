

let a = "Subham "; b = "Das";
let c = "I am a good boy";
let d = "banana, mango, apple";
let e = "I do want to get placed into Microsoft because Microsoft is my dream company";

console.log(a.charAt(6))  // white space
console.log(a.charCodeAt(6))  // space in UTF-16 have the value 32
console.log(a.concat(b)) // Subham Das
console.log(String.fromCharCode(97, 98, 99)) // returns the character having the given UTF-16 value
console.log(c.indexOf("a")) // searches and returns the index of the given word in the caller sentence -> Here searches 'a' in variable c -> 2
console.log(c.lastIndexOf("o")) // returns the last index of the searched character in the caller variable
console.log(c.replace("good", "bad")) // replaces the 2nd parameter with the 1st one of the caller variable
console.log(a.replace(" ", "m")) // replaces the letter in the calller word
console.log(c.search("a")) // searches and returns the index of the word in the caller sendence or the index of the letter in the caller word
console.log(c.slice(5, 9)) // returns the characters from the starting index to the ending index. [index 9 not included] [If there is no second parameter then it will slice till the end of the specified word or sentence]
console.log(d.split(",")) // splits the sentence according to the delimiter passed as the argument and returns an array
console.log(c.substring(3,10)) // returns the substring wrt the specied starting and ending length as the parameter.
console.log(c.includes("good")) // searches for the word given as parameter and returns in boolean
console.log(c.startsWith("I")) // checks if the sentence is starting with the given string or not and returns a boolean value.
console.log(c.endsWith("boy")) // checks if the sentence is ending with the given string or not and returns a boolean value.
console.log(c.repeat(2)) // repeat the caller string or sentence for the specified number of times [without white space]
console.log(c.trim()) // removes the white space from the ending and the starting of the caller sentence or the word.
console.log(e.replaceAll("Microsoft", "Amazon")) // replaces all "Microsoft" to "Amazon"