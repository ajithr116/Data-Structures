function linearSearchDuplicates(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true; 
            }
        }
    }
    return false; 
}


console.log(`Array has duplicates: ${linearSearchDuplicates([1,2,3,4,5,4,8,9])}`);
console.log(`Array has duplicates: ${linearSearchDuplicates([1,2,3])}`);

