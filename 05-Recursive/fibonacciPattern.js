function fibonacciSequence(n, a = 0, b = 1) {
    if (n <= 0) {
        return; // Base case: if n is 0 or negative, return
    }
    console.log(a); // Print the current Fibonacci number
    fibonacciSequence(n - 1, b, a + b); // Recursive call with updated Fibonacci numbers
}

// Test Data
const count = 10; // Generate the first 10 Fibonacci numbers
fibonacciSequence(count);
