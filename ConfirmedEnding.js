function confirmEnding(str, target) {
    return str.substring(str.length-target.length) === target;
}
console.log(confirmEnding("Hello world", "d"));
console.log(confirmEnding("Hello world", "o"));