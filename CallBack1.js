function add(a,b)
{
    console.log("Result:",a+b);
}

function calculate(x,y,callback)
{
    // do something, then call the callback
    callback(x,y);
}
calculate(5,3,add);
// Output:Result:8
console.log(calculate);