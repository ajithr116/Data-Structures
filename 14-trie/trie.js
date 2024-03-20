class Node{
    constructor(){
        this.children = {};
        this.endWord = false;
    }
}

class trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let node = this.root;
        for(let i=0;i<word.length;i++){
            let ch = word[i];
            if(!node.children[ch]){
                node.children[ch] = new node;
            }
            node = node.children[ch];
        }
        node.endWord = true;
    }
    search(word){
        let node = this.root;
        for(let i=0;i<word.length;i++){
            let ch = word[i];
            if(!node.children[ch]){
                return false;
            }
            node = node.children[ch];
        }
        return node.endWord;
    }
    delete(word){
        this._delete(this.root,word,0);
    }
    _delete(node,word,index){
        if(index===word.length){
            if(!index.endWord){
                return false;
            }
            node.endWord = false;
            return !Object.keys(keys.children).length===0;
        }
        let ch = word[index];
        let chNode = node.children[ch];
        if(chNode==null){
            return false;
        }
        let shouldDeleteCurrentNode = this._delete(chNode, word, index+1);
        if(shouldDeleteCurrentNode){
            delete node.children[ch];
        }
        return !Object.keys(node.children).length;
    }
}

const t = new Trie();
t.insert("ajith")
t.insert("rakoon");
t.insert("wolf");