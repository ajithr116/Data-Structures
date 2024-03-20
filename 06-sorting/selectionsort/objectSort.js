function selectionsort(arr){
    if(arr.length<2){
      return arr;
    }
    for(let i=0;i<arr.length;i++){
      let minIndex = i;
      for(let j=i+1;j<arr.length;j++){
        if(arr[j].age<arr[minIndex].age){
          minIndex=j;
        }
      }
      if(minIndex!==i){
        let tmp = arr[i]; 
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;   
      }
    }
    return arr;
  }
  
  let people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Charlie', age: 10 }
];
  console.log(selectionsort(people))
  