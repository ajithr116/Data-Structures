
const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  
  console.log(
    quickSort([5, 4, 1, 6, 8, 5, 5, 8, 5, 6, 5, 5, 6, 5, 84, 484, 8, 4])
  );

  /*Initial Array: [5, 4, 1, 6, 8, 5, 5, 8, 5, 6, 5, 5, 6, 5, 84, 484, 8, 4]

Base Case: Since the length of the array is greater than or equal to 2, we proceed with the Quicksort algorithm.

Choose Pivot: The pivot is chosen as the last element of the array, which is 4.

Partitioning:

Loop through the array from the first element to the second to last element (excluding the pivot).
If the current element is less than the pivot (4), push it into the left array.
Otherwise, if it's greater than or equal to the pivot, push it into the right array.
After partitioning, the arrays might look like this:
left: [1], right: [5, 6, 8, 5, 5, 8, 5, 6, 5, 5, 6, 5, 84, 484, 8]
The pivot (4) is not yet included in any array.
Recursively Apply:

Recursively apply Quicksort to the left and right arrays.
For the left array [1], no further action is needed since it only contains one element.
For the right array [5, 6, 8, 5, 5, 8, 5, 6, 5, 5, 6, 5, 84, 484, 8]:
Choose the last element (8) as the pivot.
Partition the array into elements less than 8 and elements greater than or equal to 8.
After partitioning, the arrays might look like this:
left: [5, 6, 5, 5, 5, 5, 6, 5, 5, 6], right: [8, 8, 8, 84, 484]
Combine:

Combine the sorted left array, pivot (4), and sorted right array into a single sorted array.
The sorted array is [1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 8, 8, 8, 84, 484].
Result:

The sorted array is [1, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 8, 8, 8, 84, 484]. */