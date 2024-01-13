/*
An exposure to fetch API

fetch('https://api.randomuser.me/?nat=US&results=1') // First, we use fetch to make a GET request to randomuser.me.
    .then(res => res.json()) // If the request is successful, we'll then convert the response body to JSON.
    .then(json => json.results) // Next, we'll take the JSON data and return the results, 
    .then(console.log) // then we'll send the results to the console.log function, which will log them to the console.
    // .then(json => console.log(json.results)) --> This could also been written in the place of 2nd and 3rd .then
    .catch('It showed error'); // Finally, there is a catch function that invokes a callback if the fetch did not resolve successfully. Any error that occurred while fetching data from randomuser.me will be based on that callback. Here, we simply log the error to the console using console.error.

*/

/*
Fetch API with async and await




First of all we took a function named 'fun' which is an async function used the 'fetch api' to fetch some data. 
As the 'fetch' was wraped with an 'await' so it 'waited' for the function to fetch all the datas and store it in 'data'.
The fetched data is then converted to 'json' and was stored in 'data' and subsequently was returned.

We also made a main function which is also an 'async' function.
For making debugging easy, we printed some message before invoking the 'fun()'. The json file returned was stored in 'ret'.
Then we printed 'ret' along with two more messages before and after printing 'ret'.

And lastly we invoked 'main()'.

This program was written to demonstrate the use of async and await with fetch.
Here with this program we demonstrated that how can we make the 'Javascript' wait for the execution which takes time and runs on a single thread without breaking the sequence of the lines of codes those were written by the programmer.
*/
const fun = async () => {
    let fet = await fetch('https://randomuser.me/api/')
    console.log("Datas fetched")
    let data = fet.json
    return (data);
}

const main = async () => {
    console.log("Before the async function called")
    let ret = await fun();
    console.log("It waited for the completion of the fetch API to complete its execution")
    console.log(ret);
    console.log("Finished")
}

main()