function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

const testString = "programming";
console.log("Number of vowels:", countVowels(testString)); 