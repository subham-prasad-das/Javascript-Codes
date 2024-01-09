const arr = [1, 2, 3, 4, 5];

/* 
The traditional way to extract the elements of the array into variables is:-

const first = arr[0] // 1
const second = arr[1] // 2
const thirt = arr[2] // 3
const fourth = arr[3] // 4
const fifth = arr[4] // 5
*/

/* 
But the new way could be done using destructuring -->

const[first, second, third, fourth, fifth] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
console.log(fifth); // 5
*/

/*
For extracting only 1 and 2 & then putting rest all other into one, we can do this -->

const[first, second, ...rest] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [ 3, 4, 5 ]
*/

/**
For extracting only the third variable, skipping all other --> 

 */

const [,,third,,] = arr;
console.log(third); // 3