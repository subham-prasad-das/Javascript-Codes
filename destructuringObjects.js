const person = {
    name : "Subham",
    age : 24
}

/*
Destructuring the objects -->
const {n, a} = person;

console.log(n); // Subham
console.log(a); // 24

here it is required to use the keys name as the variables to store the properties
*/

/*
Assigning to different variable names
const { name: personName, age: personAge } = person;

console.log(personName); // Subham
console.log(personAge); // 24

console.log(person.name);

here it is not required to use the keys name as the variables to store the properties
 */
