/* understanding the use of constructor to create objects in javascript */


/* 
--> creating object using constructor, useful when we need to create several objects with same keys

function user(username, userId, joiningMonth){
    this.username = username;
    this.userId = userId;
    this.joiningMonth = joiningMonth;
}

const subham = new user("Subham", 43, 11);
console.log(typeof(subham)); // type will be 'object'
console.log(subham); // will print the whole object
*/

/* 
--> creating objects using Object.create()


const personProto = {sayhello : function(){
    console.log('Hello');
}};
const John = Object.create(personProto);
John.name = 'John';
John.age = 24;

console.log(John);

*/

/*
--> using the function to wrap the creation of the object inside the function

const user = (name, age) => {
    return {name, age};
}
const firstUser = user('Subham', 24);

console.log(firstUser); // {name : 'Subham', age : 24}
console.log(typeof(firstUser)); // object
*/