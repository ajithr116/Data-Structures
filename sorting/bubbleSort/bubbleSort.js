//bubblesort is select largest value and put las of the array 
function bubbleSort(arr){
    const len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){     //len-i-1 is for to avoid null. j < len - i - 1 is to prevent unnecessary comparisons between elements that have already been sorted in previous iterations.
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}



console.log(bubbleSort([3,7,6,4,9,0,11,1,1]));