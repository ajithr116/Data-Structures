function factorial(n) {
    // Base case: If n is 0, the factorial is 1.
    if (n === 0) {
        return 1;
    }
 
    // Recursive case: Calculate the factorial by multiplying n with the factorial of (n - 1).
    return n * factorial(n - 1);
}

console.log(factorial(5));

/*
    Initial Call: We start with the initial call factorial(5).

    Recursive Call Chain:

    factorial(5) calls factorial(4) and waits for its result.
    factorial(4) calls factorial(3) and waits for its result.
    factorial(3) calls factorial(2) and waits for its result.
    factorial(2) calls factorial(1) and waits for its result.
    factorial(1) calls factorial(0) and waits for its result.
    Base Case Reached: factorial(0) returns 1 because it's the base case.

    Unwinding the Recursion:

    factorial(1) receives the result from factorial(0), which is 1, and returns 1 * 1 = 1.
    factorial(2) receives the result from factorial(1), which is 1, and returns 2 * 1 = 2.
    factorial(3) receives the result from factorial(2), which is 2, and returns 3 * 2 = 6.
    factorial(4) receives the result from factorial(3), which is 6, and returns 4 * 6 = 24.
    factorial(5) receives the result from factorial(4), which is 24, and returns 5 * 24 = 120.
    Final Result: The initial call factorial(5) receives the final result of 120 and returns it

*/