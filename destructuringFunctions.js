const person = {
     name : "Subham",
     age : 24
}

/*
This is the typical way to pass the object as argument and access its properties..
 
const persona = (per) =>{
     console.log(per.name);
}

*/


/*
This the way to access the properties 

const persona = ({name, age}) => {
    console.log(`${name} is ${age} year's old`);
}

*/

persona(person);
