function replaceAlphabets(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (alphabet.includes(char)) {
            let newIndex = (alphabet.indexOf(char) + n) % alphabet.length;
            if (str[i].toUpperCase() === str[i]) {
                result += alphabet[newIndex].toUpperCase();
            } else {
                result += alphabet[newIndex];
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

const inputString = 'Hello, World!';
const n = 3;
const replacedString = replaceAlphabets(inputString, n);
console.log("Replaced string:", replacedString); // Output: "Khoor, Zruog!"
