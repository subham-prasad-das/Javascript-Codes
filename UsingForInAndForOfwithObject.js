// using for ... in and for ... of loop with object

let jersyNo = {
    Rohit: 45,
    Dhoni: 7,
    Virat: 18
}

/*
for(let i in jersyNo){
    console.log(i)
}
when traversed with 'i', the property(index) of the object will be printed 
*/

/*
for(let i in jersyNo){
    console.log(jersyNo[i])
}
when traversed with 'arr[i]', elements of the array will be printed
*/

/*
for(let i of jersyNo){
    console.log(i)
}

gives out "Syntax error"
*/

/*
for(let i of jersyNo){
    console.log(jersyNo[i])
}
gives out "Syntax error"
*/


// As the conclusion, we get that, for ... of loop cannot be used in case of objects