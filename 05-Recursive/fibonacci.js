function fibonacci(n) {
    if (n <= 1) {
        return n; // Base case: if n is 0 or 1, return n
    } else {
        // Recursive case: fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test Data
const n = 7; // Calculate the 7th Fibonacci number
console.log("Fibonacci number at index", n, "is:", fibonacci(n)); // Output: Fibonacci number at index 7 is: 13
