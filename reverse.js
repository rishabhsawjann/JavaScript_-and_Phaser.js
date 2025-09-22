function reverseString(str)
{
    let charArray=str.split("");
   //eturn charArray;// if you use return here the function ends
    // the line below will not be executed
    let newArray= charArray.reverse().join("");
    return newArray;

}
console.log(reverseString("hello"));








