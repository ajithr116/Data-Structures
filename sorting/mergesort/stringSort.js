function mergeSort(arr){
    const half = arr.length/2;
    if(arr.length<2){
        return arr;
    }
    let left = arr.splice(0,half);
    return merge(mergeSort(left),mergeSort(arr));
}

function merge(left,right){
    let arr = [];
    while(left.length && right.length){
        if(left[0]>right[0]){
            arr.push(left.shift());
        }
        else{
            arr.push(right.shift());
        }
    }
    return [...arr,...left,...right];
}

console.log(mergeSort(["orange","apple","pineapple","watermelone"]));

