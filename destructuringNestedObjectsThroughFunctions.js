const person = {
    name : "Ranbir",
    Age : 41,
    spouse : {
        name : "Aliyah",
        age : 30
    }
}

/*
The traditional way to access the properties of the nested object

const persona = (per) => {
    console.log(per.spouse.name);
}

*/

/*
Accessing the properties of the nested object through destructuring

const persona = ({spouse : {name}}) => console.log(`name of the spouse is ${name}`)
*/
persona(person);