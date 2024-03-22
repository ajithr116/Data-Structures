



class HashTable{
    constructor(size=10){
      this.table = new Array(size).fill(null).map(()=>[]);
      this.size = size;
      this.count = 0;
    }
    _hash(key){
      let hash = 0;
      for(let i=0;i<key.length;i++){
        hash +=key.charCodeAt(i);
      }
      return hash%this.size;
    }
    set(key,value){
      if(this.count/this.size>0.7){
        this.resize(this.size*2);
      }
      const index = this._hash(key);
      const exist = this.table[index].find((pair)=>pair[0]===key);
      if(exist){
        exist[1]=value;
      }else{
        this.table[index].push([key,value]);
        this.count++;
      }
    }
    get(key){
      const index = this._hash(key);
      const pair = this.table[index].find((pair)=>pair[0]===key);
      return pair ? pair[1] : "not found";
    }
    remove(key){
      const index = this._hash(key);
      const pairIndex = this.table[index].findIndex(pair=>pair[0]===key);
      if(pairIndex!==-1){
        this.table[index].splice(pairIndex,1);
        this.count--;
        if(this.count-this.size>0.3){
          this.resize(Math.floor(this.size/2));
        }
      }
    }
    print(){
      for(let i=0;i<this.size;i++){
        console.log(this.table[i]);
      }
    }
    resize(newSize){
      const oldTable = this.table;
      this.size = newSize;
      this.count=0;
      this.table = new Array(newSize).fill(null).map(()=>[]);
      for(const bucket of oldTable){
        for(const [key,value] of bucket){
          this.set(key,value);
        }
      }
    }
    wordCount(text, hashTable) {
        // Split the text into words
        const words = text.split(/\s+/);
      
        // Iterate over each word
        for (const word of words) {
          // If the word is already in the hash table, increment its count
          if (hashTable.get(word) !== "not found") {
            const count = hashTable.get(word);
            hashTable.set(word, count + 1);
          } else {
            // Otherwise, add the word to the hash table with a count of 1
            hashTable.set(word, 1);
          }
        }
      
        // Print the word counts
        hashTable.print();
      }
       
  }


// Example usage:
const hashTable = new HashTable();
const text = "this is a test this is only a test";
hashTable.wordCount(text, hashTable);