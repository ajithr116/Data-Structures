function pairDifference(arr, n) {
    const numMap = {};
    for (let num of arr) {
      if (numMap[num - n] || numMap[num + n]) {
        return true;
      }
      numMap[num] = true;
    }
    return false;
  }
  
console.log(pairDifference([1,2,3,3,4,5],3))