// what is a higher-Order function
// In JS, a function is higher-order if it does at least one of these
/* 
1.It takes another function as an argument(callback)
2.Returns another function
that's it, just remember this
*/
function sayHello()
{
     return "Hello";
}
function greet(func)
{
    return func();// calls the function passed in 
}
console.log(greet(sayHello));