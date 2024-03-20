function linearSearch(arr,target){
    for(let i=0 ;i<arr.length;i++){
        if(arr[i]===target){
            return i+1;
        }
    }
    return "not found ";
    
}


console.log(linearSearch([1,2,3,4,5,6,7,8,9,0],15));
console.log(linearSearch([1,2,3,4,5,6,7,8,9,0],5));
