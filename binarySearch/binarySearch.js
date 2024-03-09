function binary(arr, target, start, end) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return start;
}

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = binary(arr, current, 0, i - 1);
        arr.splice(i, 1);
        arr.splice(j, 0, current);
    }
    return arr;
}

console.log(insertionSort([5, 3, 7, 2, 9, 1, 6])); // Output: [1, 2, 3, 5, 6, 7, 9]
