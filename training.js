function insertionsort(arr){
  if(arr.length<2){
    return arr;
  }

  for(let i=1;i<arr.length;i++){
    let current = arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>current){
      arr[j+1]=arr[j];
      j--;
    }
    arr[j+1]=current;
  }
  return arr;
}
console.log(quicksort([5, 4, 1, 6, 8, 5, 5, 8, 5, 6, 5, 5, 6, 5, 84, 484, 8, 4]))