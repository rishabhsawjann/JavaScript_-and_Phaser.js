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