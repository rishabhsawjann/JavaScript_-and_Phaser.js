const numbers=[414, 200, 5, 10, 3];
numbers.sort((a,b)=>a-b);
console.log(numbers);
//okay so the parameters a and b are the two
//elements being compared.
/*
there are three cases here:
1. if a should come before b, it return a negative value
2. if b should come before a, it return a postive value
3.if both of them are equal, it should return zero

The first comparison is between the numbers 414 and 200.
The result of 414 - 200 is 214, which is a positive value. 
This means that 414 should come after 200 in the sorted array.

The next comparison is between the numbers 200 and 5.
The result of 200 - 5 is 195, which is a positive value.
This means that 200 should come after 5 in the sorted array.
*/



