//Now we are going to use objects:
/*
In JavaScript, an object is a fundamental data structure
that allows you to store and organize related data and functionality.
*/
/*you can think of an object as a container that holds various 
pieces of information are called properties, and they consist of a
name(or key) and a value.*/
const exampleObject=
{
    property: value,
}
// objects in js is very versatile and form the backbone of JavaScript
//everything in js is object or can be trated as one:
//This includes arrays,functions, and even primitive data types 
//like strings and numbers when used in certain ways.

//lets take an example:

const person=
{
    name:"Rishabh",
    age:30,
    city:"New York"
};
// so we have created an object person with three properties:
// name, age and city:

//objectName.propertyName

console.log(person.name); 
console.log(person.age);  

// we can also use bracket notaion to access the property of an object:

const rishabh=
{
    age:23,
    Id="Rishabh",
    city:"Mussoorie",
};

console.log(rishabh["age"]);
console.log(rishabh["city"]);

