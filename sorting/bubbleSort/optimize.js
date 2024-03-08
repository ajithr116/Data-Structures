function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let swapped = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j].age > arr[j + 1].age) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;// If no two elements were swapped in a pass, array is sorted.
    }
    return arr;
} 

let people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Charlie', age: 10 },
    { name: 'John', age: 1 }
];


console.log(bubbleSort(people));