class HashTable {
    constructor(size) {
      this.data = new Array(size).fill(null); // Create an array of size 'size' filled with null values (buckets)
    }
  
    // Hash function: Converts a key into an index within the data array
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length; // Simple hash function using character codes
      }
      return hash;
    }
  
    // Set operation: Adds a key-value pair to the hash table
    set(key, value) {
        const index = this.hash(key); // Get the hashed index for the key
        if (!this.data[index]) {
        this.data[index] = { key, values: [value] }; // No collision, directly assign to the bucket
        } else {
        let currentNode = this.data[index];
        // Use separate chaining: Create a linked list at collision points
        while (currentNode.next) {
            if (currentNode.key === key) {
            currentNode.values.push(value);
            return;
            }
            currentNode = currentNode.next;
        }
        if (currentNode.key === key) {
            currentNode.values.push(value);
        } else {
            currentNode.next = { key, values: [value] };
        }
        }
    }
    
    // Get operation: Retrieves the values associated with a key
    get(key) {
        const index = this.hash(key); // Get the hashed index for the key
        let currentNode = this.data[index];
        // Traverse the linked list if there's a collision
        while (currentNode) {
        if (currentNode.key === key) {
            return currentNode.values; // Key found, return the values
        }
        currentNode = currentNode.next;
        }
        return undefined; // Key not found
    }
    
    // Has operation: Checks if a key exists in the hash table
    has(key) {
      return this.get(key) !== undefined; // Check if get(key) returns a value
    }
  
    // delete operation: Removes a key-value pair from the hash table
    delete(key) {
      const index = this.hash(key); // Get the hashed index for the key
      let currentNode = this.data[index];
      let previousNode = null;
  
      // Traverse the linked list to find the key
      while (currentNode) {
        if (currentNode.key === key) {
          if (previousNode === null) {
            // Key found at the head of the linked list
            this.data[index] = currentNode.next; // Update head of the linked list
          } else {
            // Key found in the middle or end of the linked list
            previousNode.next = currentNode.next;
          }
          return true; // Key deleted successfully
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      return false; // Key not found
    }
  
    // clear operation: Removes all key-value pairs from the hash table
    clear() {
      this.data.fill(null);
    }
  
    // size operation: Returns the number of key-value pairs in the hash table
    size() {
      let count = 0;
      for (let i = 0; i < this.data.length; i++) {
        let currentNode = this.data[i];
        while (currentNode) {
          count++;
          currentNode = currentNode.next;
        }
      }
      return count;
    }
  
    // printHashTable operation: Prints the contents of the hash table (for debugging purposes)
    printHashTable() {
      for (let i = 0; i < this.data.length; i++) {
        let bucket = this.data[i];
        if (bucket) {
          console.log(`Bucket ${i}:`);
          let currentNode = bucket;
          while (currentNode) {
            console.log(`  -> { key: ${currentNode.key}, value: ${currentNode.value} }`);
            currentNode = currentNode.next;
          }
        }
      }
    }
  }
  
  // Example usage
  const myHashTable = new HashTable(5); // Create a hash table with size 5
  myHashTable.set("apple", "red");
  myHashTable.set("banana", "yellow");
  myHashTable.set("mango", "orange");
  myHashTable.set("mango", "pineapple");
  myHashTable.printHashTable();
  console.log(myHashTable.get("mango"))