const person = {
    name : "Subham",
    age : 24
}

/*
Destructuring the objects -->
const {name, age} = person;

console.log(name); // Subham
console.log(age); // 24

here it is required to use the keys name as the variables to store the properties i.e if we had taken 'n' and 'a' it wont had worked
*/

/*
Assigning to different variable names
const { name: personName, age: personAge } = person;

console.log(personName); // Subham
console.log(personAge); // 24

console.log(person.name);

here it is not required to use the keys name as the variables to store the properties. It is useful if we want to take our own variable nemes to store the properties
 */

