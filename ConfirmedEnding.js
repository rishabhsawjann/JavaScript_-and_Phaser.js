function confirmEnding(str, target) {
    if(str.charAt(str.length - 1) === target) {
        return true;
    } else {
        return false;
    }
}
console.log(confirmEnding("Hello world", "d"));
console.log(confirmEnding("Hello world", "d"));