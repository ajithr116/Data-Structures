function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {    //here it comparing arr[1] and arr[0]; if its greater 
            arr[j + 1] = arr[j];                //here its changin the value. arr[1] value to arr[0] if true
            j--;
        }
        arr[j + 1] = current;                   //after setting the value
    }
    return arr;         
}

// Example usage:
const array = [5, 3, 7, 2, 9, 1, 0, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 7, 9]
