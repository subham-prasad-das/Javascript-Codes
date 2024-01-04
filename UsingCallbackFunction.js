const a = [1,2,3,4,56,-2,-4,4,6]

const findNeg = (c) => {if(c < 0) return c;}

const res = a.find(findNeg) // passed the function we have made to find out the first negative number in the array we have created 

console.log(res); // returns the first negative number that is -2 in the given array

// so here we have used the callback funtion to pass the function we made to find out the first negative number in the given array by passing the function and calling it through the array

const findInd = (c) => {
    let count = 1;
    if(c < 0) return count; else count++;
}

const resu = a.findIndex(findInd)
console.log(resu);