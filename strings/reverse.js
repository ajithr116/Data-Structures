function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            low = mid + 1; // Continue searching in the right half
        } else {
            high = mid - 1; // Continue searching in the left half
        }
    }
    
    return -1; // Element not found
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetElement = 9;
const resultIndex = binarySearch(array, targetElement);

if (resultIndex !== -1) {
    console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}
