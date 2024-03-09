function insertionSort(arr){
    if(arr.length<2){
        return arr;
    }
    for(let i=1;i<arr.length;i++){
        let current = arr[i];
        let j = i-1;
        while(j>=0 && arr[j].age>current.age){
            arr[j+1] =arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    return arr;
}


let people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Charlie', age: 10 }
];

console.log(insertionSort(people))