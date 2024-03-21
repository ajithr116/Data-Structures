class graph{
    constructor(){
        this.matrix=[];
        this.vertexNames = [];
    }
    addVertex(name){
        let index = this.matrix.length;
        this.vertexNames[index] = name;
        this.matrix[index]=[];
        for(let i=0;i<=index;i++){
            if(this.matrix[i][index] === undefined){
                this.matrix[i][index]=0;
            }
            if(this.matrix[index][i]===undefined){
                this.matrix[index][i]=0;
            }
        }
    }
    removeVertex(name){
        let index = this.vertexNames.indexOf(name);
        if(index!==-1){
            this.matrix.splice(index,1);
            this.vertexNames.splice(index,1);
            // for (let i = 0; i < this.matrix.length; i++) {
            //     this.matrix[i].splice(index, 1);
            // }
        }
    }
    addEdge(name1,name2){
        let index1 = this.vertexNames.indexOf(name1);
        let index2 = this.vertexNames.indexOf(name2)
        if(index1!==-1 && index2!==-1){
            this.matrix[index1][index2]=1;
            this.matrix[index2][index1] = 1;
        }
    }
    removeEdge(name1,name2){
        let index1 = this.vertexNames.indexOf(name1);
        let index2 = this.vertexNames.indexOf(name2);
        if(index1 !== -1 && index2 !== -1){
            this.matrix[index1][index2]=0;
            this.matrix[index2][index1]=0;
        }
    }
    getEdges(name){
        let index = this.vertexNames.indexOf(name);
        let edge = [];
        if(index !== -1){
            for(let i=0;i<this.matrix[index].length;i++){
                if(this.matrix[index][i]==1){
                    edge.push(this.vertexNames[i])
                }
            }
        }
        return edge;
    }

}

const g = new graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
console.log(g);
g.addEdge("b","c")
g.addEdge("b","a")
console.log(g);
// g.removeEdge("b","c")
// console.log(g);
console.log(g.getEdges("c"))
g.display()