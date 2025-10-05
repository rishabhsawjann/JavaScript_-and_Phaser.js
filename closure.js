//we  will study about closures:

function outerFunction(x) {
    let y = 10;
    function innerFunction(){
        console.log(x + y);
    }
    return innerFunction;
}

let closure = outerFunction(5);// we are calling outerfunction that
// is being stored in closure
// and it has acess to x and y from outerFunction even though
//outer function has already finished executing.
closure(); // Output: 15


// in this example we have a outerfunction(x)
// and it has a local variable y 
// and then we have a inner function
//and we return inner function 
// When we later call closure() 
// it still has access to x and y from outerFunction 
//even though outerFunction has already finished executing.
// this is the importance of closure.

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

/*
In this case, createCounter returns a function 
that increments and returns a count variable.
 The count variable is not directly accessible 
 from outside createCounter, but the returned 
 function (our closure) has access to it. 
 Each time we call counter(), 
 it increments and returns the count.
 */
// so basically we can get the benefit of functions 
//
