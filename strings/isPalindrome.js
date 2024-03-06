function isPalindrome(str){
    return str===str.split('').reverse().join('');
}


console.log(isPalindrome("malayalam"));
console.log(isPalindrome("cat"));

