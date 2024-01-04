/*
Typical way to use function -->

function fun (x, y) {
    console.log(x + y);
}

fun(4, 5)
*/

/*
using arrow function with implicit return type -->

const fun = (x, y) => (x + y);

console.log(fun(4, 5));
*/

/*
using arrow function having more than one line of code-->

const fun = (x, y) => {
    console.log("It is inside the arrow function");
    console.log("The addition of the two numbers is:", x + y);
}

fun (4, 5);
*/

/*
using a function which is itself invoked just after its definition

(function (){
    console.log("Its a IIF");
})()
*/