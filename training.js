class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.count = 0; // Keep track of total entries
    this.table = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    // Check load factor
    if (this.count / this.size > 0.7) {
      this.resize(this.size * 2);
    }
    const index = this.hash(key);
    const bucket = this.table[index];
    const existingPair = bucket.find(pair => pair[0] === key);
    if (existingPair) {
      existingPair[1] = value;
    } else {
      bucket.push([key, value]);
      this.count++; // Increase count
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    const pair = bucket.find(pair => pair[0] === key);
    return pair ? pair[1] : undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    const pairIndex = bucket.findIndex(pair => pair[0] === key);
    if (pairIndex !== -1) {
      bucket.splice(pairIndex, 1);
      this.count--; // Decrease count
      // Check load factor
      if (this.count / this.size < 0.3) {
        this.resize(Math.floor(this.size / 2));
      }
    }
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      const bucket = this.table[i];
      console.log(`Bucket ${i}:`, bucket);
    }
  }

  resize(newSize) {
    const oldTable = this.table;
    this.size = newSize;
    this.count = 0; // Reset count
    this.table = new Array(newSize).fill(null).map(() => []);
    for (const bucket of oldTable) {
      for (const [key, value] of bucket) {
        this.set(key, value); // Rehash keys
      }
    }
  }
}



const ht = new HashTable();
ht.set("a","aaa");
ht.set("a","zzzz");
ht.set("b","bbb");
ht.set("c","ccc");
ht.set("d","ddd");
ht.set("e","eee");
ht.set("f","fff");
ht.set("g","aaa");
ht.set("h","aaa");
ht.set("i","aaa");
ht.set("ijk","aaa");
ht.get("e");
ht.print();
