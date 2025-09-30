//we learn about higher order functions:
/* a callback function is a function that is passed to another function
as an argument and is executed after the main function has finished 
its execution
it is way to ensure that certain code does not execude until a 
previous operation has been completed*/


/* call back function in simple words
Imagine you have a function that performs a task,
 and you want to do something after that task is complete.
Instead of writing all the code in one big function,
you can pass a second function (the callback) to be executed
when the first function is done. 
This allows for more flexible and modular code.*/

//for understading this let us first understand foreach 

let numbers=[1,2,3,4,5];
numbers.forEach(function(number)
{
    console.log(number*2);
});

// so for this we dont have to care about the function
// it's important to understabd that the callback function is
// called once for each element in the array, in order
// forEach takes care of the looping for you, 
// so you don't have to write a for loop yourself.

let num=[1,2,3,4,5];
num.forEach((number,index,array)=>{
    console.log('Element ${number} is at index ${index} in array ${array}' );
});



//To understand higher order functions,
//  let's first consider functions as first-class citizens
//  in JavaScript. This means that functions can be treated 
// like any other value – they can be assigned to variables,
//  passed as arguments to other functions,
//  and returned from functions. 
// this funtions is what enables the creation and use of 
// higher order functions.
