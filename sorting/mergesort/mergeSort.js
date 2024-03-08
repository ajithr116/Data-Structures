function mergeSort(array) {
    const half = array.length / 2// O(1)
    
    // Base case or terminating case
    if(array.length < 2){// O(1)
      return array // O(1)
    }
    
    const left = array.splice(0, half)      // O(n/2) -> O(n)    //The splice() method adds and/or removes array elements. The splice() method overwrites the original array.
    return merge(mergeSort(left),mergeSort(array)) // T(n) = 2T(n/2) + O(n)
}

function merge(left, right) {
    let arr = []// O(1)
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {// O(n)
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {   // O(1)
                                /*Since both left and right are sorted arrays, comparing their first elements (left[0] and right[0]) gives us the smallest elements in each sub-array.
                                Selecting the Smallest Element:
                                By comparing the first elements of left and right, we can determine which one is smaller.
                                We need to pick the smallest element among the first elements of both sub-arrays to ensure that the merged array remains sorted. */
            arr.push(left.shift())  // O(1)
        } else {
            arr.push(right.shift()) // O(1)
        }
    }
    
    // Concatenating the leftover elements
    return [ ...arr, ...left, ...right ]// O(n)
}


array = [4, 8, 7, 2, -10,-66, 11, 1, 3, 1, 5];
console.log(mergeSort(array));


