/*
let us take an example:
Imagine this:
Suppose you call your friend for a ride
You say:"when you reach outside, call me"
You don't wait outside the whole time
Your friends call you whenever they arrive
This is callback function
*/

/*
Without callback
You’d have to do everything in one place, step by step. If something takes time (like downloading data), your program gets stuck waiting.

With callback
You tell JavaScript:

“When you finish this work, call this function.”

Meanwhile, the rest of your program can keep running.

Why we use callbacks

✅ Reusability → One function can work with different actions.

✅ Flexibility → You decide later what should happen.

✅ Async tasks → Perfect for things that take time (API calls, timers, reading files, etc.).
*/

function fetchData(callback)
{
    console.log("Fetching Data...");
    setTimeout(()=>{
        console.log("Data ready!");
        callback("Here is your data");
    },2000);
}
function showData(data)
{
    console.log("Showing:",data);
}
fetchData(showData);