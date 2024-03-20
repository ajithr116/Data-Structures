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
}


const ht = new HashTable();
ht.set("a","aaa");
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
ht.remove('c')
ht.print();
