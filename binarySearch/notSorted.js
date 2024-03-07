function sorting(arr){
    return arr.sort();
}

function unsorted(arr,target){
    let sortArr = sorting(arr);
    let low = 0;
    let high = sortArr.length-1;

    
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(sortArr[mid]===target){
            return `sorted Array ${sortArr} : ${mid+1}`;
        }else if(sortArr[mid]<target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return "null";
}

console.log(unsorted(['a','c','h','b'],'c'));



