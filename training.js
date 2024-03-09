function selectionSort(arr) {
  if (arr.length < 2) {
      return arr; // If array has only one or zero elements, it's already sorted
  }

  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          let minIndex = j; // Assume the current index as the minimum
          for (let k = j + 1; k < arr[i].length; k++) {
              if (arr[i][k] < arr[i][minIndex]) {
                  minIndex = k; // Update minIndex if a smaller element is found
              }
          }
          if (minIndex !== j) {
              // Swap the elements if the minimum element is not at the current index
              [arr[i][j], arr[i][minIndex]] = [arr[i][minIndex], arr[i][j]];
          }
      }
  }
  return arr;
}

console.log(selectionSort([[3, 2, 1, 6], [5, 3, 2, 6], [89, 1, 2, 34], [0, 0, 0, 4]]));
