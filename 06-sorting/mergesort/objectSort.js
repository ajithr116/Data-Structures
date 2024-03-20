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
        if(left[0].age>right[0].age){
            arr.push(left.shift());
        }
        else{
            arr.push(right.shift());
        }
    }
    return [...arr,...left,...right];
}

let people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Charlie', age: 10 }
];

console.log(mergeSort(people));

