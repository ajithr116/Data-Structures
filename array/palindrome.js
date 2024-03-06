function isPalindromeArray(arr) {
    return arr.join('') === arr.slice().reverse().join('');
}

const palindrome1 = [1, 2, 3, 2, 1];
const palindrome2 = [1, 2, 3, 4, 5];
console.log("Is palindrome1:", isPalindromeArray(palindrome1)); 
console.log("Is palindrome2:", isPalindromeArray(palindrome2)); 