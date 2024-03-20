const frequency = (text) => { 
    if (text.length === 0) 
    {
        return 'String should not be empty!'
    }
    if (typeof text !== 'string')
    {
        return 'It must be a string.'
    }
    const words = text.split(' ')
   if (words.length < 2) {
     return words[0]
   }

    const wordCounts = new Map();
    for (const word of words.map(w => w.toLowerCase())) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }

    let mostFrequentWord = "";
    let maxFrequency = 0;
    for (const [word, count] of wordCounts.entries()) {       // entries() returns a new array iterator object that contains the key/value pairs for each index in the array
        if (count > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = count;
        }
    }

    return maxFrequency > 0 ? mostFrequentWord : "0";
    
}
 console.log(frequency(" The the the quick brown fox jumps over the lazy dog"))  // 'the'
 console.log(frequency("Python is a high-level, general-purpose programming language."))  // 'a'
 console.log(frequency(" It was the same man, she was sure of it. It's always the same, Chauncey."))  // 'the'
 console.log(frequency(12321))  
 