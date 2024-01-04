// practising callback in javascript

const call = (a, b, operation) => { // here we have defined the callback function
    return operation(a, b); // here we have returned the results of the callback function after it has completed its operation
}

// now we will be using the same callback function for addition as well as for subtraction

let add = call(3, 4, addition = (num1, num2) => num1 + num2); // here we have called the callback function passing 3 and 4 as the argument and addition as the function 

console.log( "the addition of the numbers we have passed is: " + add); // here we have printed the outcomes of the callback functions

let sub = call(4, 3, subtraction = (num1, num2) => num1 - num2); // here we have called the callback function for the subtraction of 2 numbers 
 
console.log("the addition of the numbers we have passed is: " +sub); // printed the results of the outcome we get from the callback function

let addn = (num1, num2) => {
    return num1 + num2;
}

const t = call(4, 3, addn);
console.log("It worked and the result we get is as expected that is: " +t)