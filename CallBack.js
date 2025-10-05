
//a callback function is just a function you give to another function, so that 
// it can call it back later.
function sayHello()
{
    console.log("Hello!");
}

function greet(callback)
{
    console.log("I am inside greet");
    callback();// calling the function passed in
}
greet(sayHello);