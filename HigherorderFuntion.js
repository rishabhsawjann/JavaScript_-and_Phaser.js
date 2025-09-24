// in this lecture // this is an example of higher order function

function operateOnArray(arr, operation)
{
    let result=[];// this is an empty array
    for(let i=0; i<arr.length;i++)
    {
        result.push(operation(arr[i]));
    }
    return result;
}
function double(x)
{
    return x*2;
}
let numbers=[1,2,3,4,5];
let doubledNumbers=operateOnArray(numbers,double);

