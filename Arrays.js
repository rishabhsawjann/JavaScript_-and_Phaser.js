/*Arrays in javascript*/
let fruits=["apple","banana","cherry"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);
// how do you acess and update an elements in an array?
console.log(fruits[1]);// accessing
fruits[1]="orange";// updting 
console.log(fruits[1]);
// how do you add an element to an array?
fruits.push("pineapple");
console.log(fruits);
// how do you remove an element from an array?
fruits.pop('cherry');
console.log(fruits);

//how to use shift amd unshift to add and remove elements from an array?
fruits.shift();
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);
