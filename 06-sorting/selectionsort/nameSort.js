function selectionsort(arr){
    if(arr.length<2){
        return arr;
    }
    for(let i=0;i<arr.length-1;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j].toLowerCase()<arr[minIndex].toLowerCase()){
                minIndex = j;
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr;
}


console.log(selectionsort(["aaa","yyy","eee","eee","PPP","xxx"]));
