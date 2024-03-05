function reverseString(str) {
    return str.split('').reverse().join('');
}

const originalString = "hello worls";
console.log("Reversed string:", reverseString(originalString));
