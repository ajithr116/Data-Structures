// function remove(arr){
//     return [...new Set(arr)];
// }

// console.log(remove([1,2,2,3,4,5,6]));



function remove(arr){
    let sortArr = arr.sort();
    let len = sortArr.length;
    // let newArr = new Set();
    // for(let i=0;i<len;i++){
    //     newArr.add(arr[i]);
    // }
    // return newArr;

    let newArr = [];
    for(let i=0;i<len;i++){
        if(sortArr[i]!=sortArr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(remove([1,2,3,4,3,5]));