/*
var topic = "javascript";
if(topic){
    var topic = "React";
    console.log("block", topic);
}
console.log("global", topic);

--> When we declared the 'topic' as "Javascript" with the keyword 'var', it got changed when we changed it under the scope of the 'if block'.
--> It shows, how many times may a variable with same name may be declared with the 'var' keyword, irrespective of the scope, they share same reference i.e. changing one will change the value of another's value.
--> Thus, in other words, declaring a variable with 'var' creates a "global variable".
*/


/*
let topic = "javascript";
if(topic){
    let topic = "React";
    console.log("block", topic);
}
console.log("global", topic);

--> When we declared the 'topic' as "Javascript" with the keyword 'let', it does not got changed when we changed it under the scope of the 'if block'.
--> It shows, how many times may a variable with same name may be declared with the 'let' keyword, it respects its scope ( lexical scoping ), they do not share same reference i.e. changing one won't change the value of another's value.
--> Thus, in other words, declaring a variable with 'let' creates a "scope respecting variable".
*/