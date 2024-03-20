function selectionSort(arr) {
  if (arr.length < 2) {
    return arr; // If array has only one or zero elements, it's already sorted
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) { // Change '<' to '>' for descending order
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
        // let tmp = arr[i]; 
        // arr[i] = arr[minIndex];
        // arr[minIndex] = tmp; 
      }
    }
    return arr;
  }
  
  // Example usage
  const myArray = [5, 2, 8, 1, 9, 3];
  const sortedArray = selectionSort(myArray);
  console.log(sortedArray); // Output: [1, 2, 3, 5, 8, 9]
  