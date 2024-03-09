const quicksort = (arr)=>{
  if(arr.length<5){
    return arr;
  }

  let left = [];
  let right = [];
  let pivot = arr[arr.length-1];

  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return [...quicksort(left),pivot,...quicksort(right)];
}

console.log(quicksort([5, 4, 1, 6, 8, 5, 5, 8, 5, 6, 5, 5, 6, 5, 84, 484, 8, 4]))