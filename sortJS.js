//How do we use sort in JS
/*
JS has a built in sort method used to arrange
the elements of an array and returns
reference to the sorted array.
No copy is made because the elements are sorted
in the same place*/

//array.sort (compareFuntion);//syntax:

const fruits=["Banana","Apple","kela","sab"];
fruits.sort();
console.log(fruits);


// suppose we have a set of numbers:
const num=[45,6,72,3,5656,89];
num.sort();
console.log(num);

// we expected to see 3,6,45,89,72,5656
// but we did not get the correct result

//  but we did not because sort method converts the elments to
//string and then compares their sequences of UTF-16 code unit
//values.
// basically using ascii values:
