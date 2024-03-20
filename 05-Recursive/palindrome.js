function isPalindrome(num) {
    num = num.toString();
    if (num.length <= 1) {
        return true;
    }
    if (num[0] !== num[num.length - 1]) {
        return false;
    }
    return isPalindrome(num.slice(1, num.length - 1));  // slice() method returns selected elements in an array, as a new array.    slice(start,end);
}


console.log(isPalindrome(12321));