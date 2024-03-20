function evaluatePostfix(expression) {
    let stack = [];
    for(let i = 0; i < expression.length; i++) {
        if(!isNaN(expression[i])) {
            stack.push(expression[i]);
        } else {
            let val1 = stack.pop();
            let val2 = stack.pop();
            switch(expression[i]) {
                case '+': stack.push(val2 + val1); break;
                case '-': stack.push(val2 - val1); break;
                case '*': stack.push(val2 * val1); break;
                case '/': stack.push(val2 / val1); break;
            }
        }
    }
    return stack.pop();
}

console.log(evaluatePostfix("231*+9-")); // Output: -4
