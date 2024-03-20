
const quicksort = (arr)=>{
    if(arr.length<2){
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[arr.length-1];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i].age<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
}


let people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Charlie', age: 10 }
];

console.log(quicksort(people))