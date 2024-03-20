
function insertionSort(arr){
    if(arr.length<2){
        return arr;
    }
    for(let i=1;i<arr.length;i++){
        let current = arr[i];
        let j=i-1;
        while(j>=0 && arr[j].toLowerCase()>current.toLowerCase()){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    return arr;
}

console.log(insertionSort(['a','j','w','g','G','o','O','d']))

