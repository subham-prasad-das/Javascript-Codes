/*
The spread operator is three dots (...) that perform several different tasks. 
First, the spread operator allows us to combine the contents of arrays. 
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

/*
=> If we had two arrays, we could make a third array that combines the two arrays into one ---->

const arr3 = [...arr1, ...arr2]
console.log(arr3); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
*/

// while printing the return value of spread operator ==> console.log(...arr1); ==>  1 2 3 4 5

/*
Suppose we want the last element of arr1 ---->


=> The traditional way-->

const a = arr1.reverse();
const lastElement = a[0];
console.log(lastElement);


=> Using destructuring operator

const [last] = arr1.reverse();
console.log(last);

// Here a problem occurred. When we reversed the array to get the last element we actually mutated the array i.e. we reversed the original array. 
// This problem can be solved by using the spread operator. 


=> Using spread operator

const [last] = [...arr1].reverse(); // created a new array, assigned the reversed values of the original array without changing the original one.
console.log(last); // last is the first element of the reversed version of the original array
console.log(arr1); // No changes happened to the original array
*/

/*
=> Suppose we want to exclude the 0th element of the array and want all other elements ----->

const [last, ...others] = arr1;
console.log(others); // [2, 3, 4, 5]
*/

/*
=> Spread Operator can also be used to take arguments of a function

*/
const fun = (...arguments) => {
    const [first, ...rest] = arguments; // the first argument will be stored in 'first' and the remaining elements in 'rest'
    const [last, ...left] = rest.reverse(); // 'rest' is reversed and the first elelment which is ultimately the last argument came into the function will be stored inside 'second' and the left overs are stored in 'left'.
    const [second, ...args] = rest; // As we have reversed the 'rest', 'second' will contain "5"

    console.log(first); // 1
    console.log(last); // 5
    console.log(second); // 5
    console.log(rest); // [ 5, 4, 3, 2 ]
    console.log(left); // [4, 3, 2]
    console.log(args); // [ 4, 3, 2 ]
}

fun(1, 2, 3, 4, 5);


/*
=> Using Spread Operator for adding objects ----->

const obj1 = {name : "Subham", age : 24};
const place = "Cuttack";

const obj = {...obj1, place};

console.log(obj); // {name : 'Subham', age : 24, place : 'Cuttack'};
*/