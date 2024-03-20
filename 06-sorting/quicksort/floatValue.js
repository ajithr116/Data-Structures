
const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  
  console.log(
    quickSort([5.3, 4.1, 1.1, 0.6, 8, 5, 5, 8, 5, 6, 5, 5, 6, 5, 84, 484, 8, 4])
  );
