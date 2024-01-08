/* Ways to retun objects */


/*
Returning objects through parameters

const person = {
    name : "Subham",
    DOY : 2000,
}

function persona(){
    return person;
}

console.log(persona());
*/

/* Returning objects through arrow functions directly

const persona = () =>
    ({
        firstName : "Subham",
        LastName : "Das"
    })

console.log(persona());

Here we need to wrap the whole object in side the parenthesis and also inside the braces in order to return it.
It only be needed to be done while returning objects.
while not returning objects, giving the outer parenthesis will show error
*/