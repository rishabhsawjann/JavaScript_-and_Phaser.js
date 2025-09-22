// 1D and 2D arrays is same in js as we
// have in java.
/*What Is Array Destructuring, and How Does It Work*/
let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"

/*In this example, we have an array called fruits with 
three elements. Using array destructuring, 
we assign the first element to the variable first, 
the second element to second, 
and the third element to third. 
This allows us to easily access individual elements
 of the array without using index notation.*/

 //Array destructing also allows you to skip element
 //you're not intersted in using commas.
 let colors=["red","green","blue","yellow"];
 let [firstColor,,thirdColor]=colors;
 console.log(firstColor);
 console.log(thirdColor);

 //Array destructing can also be used to swap values
 //of two variables without using a temporary variable.
