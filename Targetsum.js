
let arr=[2,4,3,7,5,8];
let target=10;

for (let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;i++)
{
    if(arr[i]+arr[j]===target)
    {
        console.log("Pair: " + arr[i] + ", " + arr[j]);

    }
}
}