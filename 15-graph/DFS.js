class graph{
    constructor(){
        this.list = {};
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = [];
        }
    }
    addEdge(vertex1,vertex2){
        if(this.list[vertex1] && this.list[vertex2]){
            this.list[vertex1].push(vertex2);
            this.list[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1,vertex2){
        if(this.list[vertex1] && this.list[vertex2]){
            this.list[vertex1] = this.list[vertex1].filter(v=>v!==vertex2)
            this.list[vertex2] = this.list[vertex2].filter(v=>v!==vertex2)
        }
    }
    removeVertex(vertex){
        while(this.list[vertex].length){
            const vertex2 = this.list[vertex].pop()
            this.removeEdge(vertex,vertex2);
        }
        delete this.list[vertex];
    }
    DFS(vertex, visited={}){
        visited[vertex]=true;
        console.log(vertex);
        for(let i=0;i<this.list[vertex].length;i++){
            let neighbor = this.list[vertex][i];
            if(!visited[neighbor]){
                this.DFS(neighbor,visited);
            }
        }
    }
}



const g = new graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");
g.addVertex("g");
console.log(g);
g.addEdge("a","c")
g.addEdge("a","b")
g.addEdge("a","d")
g.addEdge("a","e")
g.addEdge("a","f")
g.addEdge("a","g")
g.addEdge("b","c")
g.addEdge("b","d")
g.addEdge("b","e")
g.addEdge("b","f")
g.addEdge("b","g")
console.log(g);
g.DFS("a");
