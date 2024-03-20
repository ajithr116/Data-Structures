function mostFrequent(arr) {
    const freq = {};
    let maxCount = 0;
    let mostFrequentNum;
    for (const num of arr) {
      freq[num] = (freq[num] || 0) + 1;
      if (freq[num] > maxCount) {
        maxCount = freq[num];
        mostFrequentNum = num;
      }
    }
    return mostFrequentNum;
  }

console.log(mostFrequent([1,2,3,4,52,3,42,3,3,3,3,3,3,3,2,2,2]));