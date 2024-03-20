function selectionsort(arr){
    if(arr.length<2){
      if(arr[0].length<2){
        return arr;
      }
    }

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            let minIndex = j;
            for(let k=j+1;k<arr[i].length;k++){
                if(arr[i][k]<arr[i][minIndex]){
                    minIndex=k;
                }
            }
            if(minIndex!==j){
                [arr[i][j],arr[i][minIndex]] = [arr[i][minIndex],arr[i][j]];
            }
        }
    }
    return arr;
  }
  
  console.log(selectionsort([[3,2,1,6],[5,3,2,6],[89,1,2,34],[0,0,0,4]]))
  