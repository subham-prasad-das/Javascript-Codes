// promises in javascript

const prom = new Promise(function (resolve, reject) { // created a new promise using the 'Promise' constructor. The constructor takes a function as as arg, whicj is called the executer function. This function is executed immediately when the Promise is created.
    const don = true; // made don true to check the .then()
    if (don) {
        resolve("its working"); // if resolved the following code inside the resolve function will be executed.
    }
    else {
        reject("It has failed"); // else the code inside the reject function will be executed.
    }
})

prom
    .then((data) => console.log(data)) // this is called when the promise is resolved successfully. It takes a callback function that receives the rejection reason i.e. whatever inside the resolve function as its argument and logs it to the console.

    .catch((data) => console.log(data) ) // likewise .catch takes the agrument i.e. whatever written inside the reject as arg.

    .finally(() => console.log("Now inside finally, the codes inside this will always be executed") )

// if we change the don as false -> the output wd hv been -->
    // "    It has failed
    //       Now inside finally, the codes inside this will always be executed    "
// We can do synchronous as well as synchronous codes in promise.