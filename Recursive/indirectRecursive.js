function foo(n) {
    if (n > 0) {
        console.log("foo: " + n);
        bar(n - 1); // Call to the other function
    }
}

function bar(n) {
    if (n > 0) {
        console.log("bar: " + n);
        foo(n - 1); // Call back to the original function
    }
}

foo(3); // Initial call to start the recursion
