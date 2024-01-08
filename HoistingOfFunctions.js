/*

--> One thing to be aware of when deciding between a function declaration and a function expression is the at function declaration are hoisted and function expressions are not.
--> In other words, one can invoke a functuon before writing a function declaration.
--> A fuction can not be invoked created by function expression.

*/

/*
--> Defining function through function expression -->

fun(); // invoked before the definition

const fun = () => {
    console.log("It Worked");
}

-> It wont work. It will show ReferenceError as the function is defined through function expression.
-> For making it work, we need to invoke the function after its definition.

const fun = () => {
    console.log("It Worked");
}

fun(); // invoked after the definition
*/


/* 
--> Defining function through function declaration -->

1st way ---
fun();

function fun(){
    console.log("It worked");
}

2nd way ---
function fun(){
    console.log("It worked");
}
fun();

Here we are defining the function through declaration, Here in both the cases, may be one write the function declaration before or after the invokation, the declaration will be hoisted.
*/

