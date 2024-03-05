function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum of array elements:", sumArray(numbers)); 
