
/*
The map method is a powerful and widely used
 function in JavaScript that operates on arrays.
 It is designed to create a new array
 by applying a given function to each
 element of the original array
 */

const numbers=[1,2,3,4,5];
const doubled=numbers.map((num)=>num*2);
console.log(numbers);//[1,2,3,4,5]
console.log(doubled);//[2,4,6,8,10]

//numbers.map((num))=>num*2);
//Here's the important part:map().
//.map() is a built-in array method in JS
//It takes a callback function
// it applies that function to every element in
// the array
//it returns a new array with the transformed
//values
// In this case:
//The callback(num)=>num*2 means"
// It will take each element,call it num,
//return num*2
//so it runs
/*
1 * 2 → 2

2 * 2 → 4

3 * 2 → 6

4 * 2 → 8

5 * 2 → 10
*/
// the result is[2,4,6,8,10].


//
