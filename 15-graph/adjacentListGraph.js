class graph{
    constructor(){
        this.list = {};
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=[];
        }
    }
    addEdge(vertex1,vertex2){
        if(this.list[vertex1] && this.list[vertex2]){
            this.list[vertex1].push(vertex2);
            this.list[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2){
        if(this.list[vertex1] && this.list[vertex2]){
            this.list[vertex1] = this.list[vertex1].filter(v=>v!=vertex2);
            this.list[vertex2] = this.list[vertex2].filter(v=>v!=vertex1);
        }
    }
    removeVertex(vertex){
        while(this.list[vertex].length){
            const vertex2 = this.list[vertex].pop();
            this.removeEdge(vertex,vertex2);
        }
        delete this.list[vertex];

    }
    displayEdge(vertex){
        return this.list[vertex];
    }
    display(){
        for(let vertex in this.list){
            console.log(vertex + "->" + this.list[vertex]);
        }
    }
}


const g = new graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
console.log(g);
g.addEdge("a","c")
g.addEdge("a","b")
g.addEdge("b","c")
console.log(g);
// g.removeEdge("a","c")
// console.log(g);
// g.removeVertex("a")
console.log(g);
console.log("display edge : " + g.displayEdge("a"));
g.display()