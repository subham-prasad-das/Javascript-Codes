const mySym = Symbol("ItsSymbol");

let obj = {
    Name: "Subham",
    Age: 24,
    [mySym]: "MySymbol"
};

console.log(obj);

/*
console.log(obj.Name); // Subham
console.log(obj["Name"]); // Subham
console.log(typeof obj.Name); // string
console.log(obj["mySym"]); // MySymbol
console.log(mySym); // ItsSymbol
console.log(typeof mySym); // Symbol
console.log(obj["mySym"]); // MySymbol
console.log(typeof obj["mySym"]); // symbol

Object.freeze(obj);
obj.Name = "Shibam";
console.log(obj["Name"]);
*/
obj.greetings = (function (){
    console.log(`hello, ${obj.Name}`);
})()

console.log(obj);