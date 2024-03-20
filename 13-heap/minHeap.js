class minHeap{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
    heapify(i){
        let smallest  = i;
        const left = 2*i+1;
        const right = 2*i+2;

        if(left<this.size && this.arr[left]<this.arr[smallest]){
            smallest = left;
        }
        if(right<this.size && this.arr[right]<this.arr[smallest]){
            smallest = right;
        }
        if(smallest !== i){
            [this.arr[i],this.arr[smallest]] = [this.arr[smallest],this.arr[i]];
            this.heapify(smallest);
        }
    }
    insert(data){
        let i = this.size;
        this.arr[i] = data;

        let parent = Math.floor((i-1)/2);
        while(i>0 && this.arr[i]<this.arr[parent]){
            [this.arr[i],this.arr[parent]] = [this.arr[parent],this.arr[i]];
            i=parent;
            parent = Math.floor((i-1)/2);
        }
        this.size++;
    }
    remove(){
        if(this.size === 0){
            return null;
        }
        const min = this.arr[0];
        this.arr[0] = this.arr[this.size-1];
        this.size--;
        this.heapify(0);
        return min;
    }
    get(){
        return this.arr.slice(0,this.size);
    }
    heapSort(){
        const originalSize = this.size;
        const sorted = new Array(originalSize);
        for(let i=0;i<originalSize;i++){
            sorted[originalSize-1-i] = this.remove();

        }
        for(let i=0;i<originalSize;i++){
            this.arr[i] = sorted[i];
        }
        this.size = originalSize;
        return sorted;
    }
}

const mh = new minHeap();
mh.insert(1);
mh.insert(4);
mh.insert(8);
mh.insert(2);
console.log(mh);
console.log(mh.remove());
console.log(mh.remove());
console.log(mh);
mh.insert(4);
console.log(mh);
console.log(mh.get())
console.log(mh.heapSort())
console.log(mh.get())




