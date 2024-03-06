function linearSearchStrings(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i+1; 
        }
    }
    return "not found"; 
}

console.log(linearSearchStrings(['apple', 'banana', 'orange', 'grape', 'kiwi'],"apple"));
console.log(linearSearchStrings(['apple', 'banana', 'orange', 'grape', 'kiwi'],"pineapple"));


