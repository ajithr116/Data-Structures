function bubbleSort(arr){
    const len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            if(arr[j][1]>arr[j+1][1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}


let people = [
    ['Alice', 20],
    ['Bob', 30],
    ['Charlie', 25],
    ['Charlie', 1]
];
console.log(bubbleSort(people))