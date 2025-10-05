// what if we have too many functions 

function sayHello()
{
    return "Hello";
}
function sayHi()
{
    return "Hi";
}
function sayBye()
{
    return "Bye!";
}

//Higher-order function
function greet(func)
{
    return func();// executes the function you pass in
}
console.log(greet(sayHello)); // "Hello!"
console.log(greet(sayHi));  //Hi!
console.log(greet(sayBye));//Bye!
