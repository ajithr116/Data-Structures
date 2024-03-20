
class Node{
    constructor(){
        this.children = {};
        this.endWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let node = this.root;
        for(let i=0;i<word.length;i++){
            let ch = word[i];
            if(!node.children[ch]){
                node.children[ch] = new Node();
            }
            node = node.children[ch];
        }
        node.endWord = true;
    }
    findWordWithPrefix(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch]){
                return [];
            }
            node = node.children[ch];
        }
        return this.findAllWords(node, prefix);
    }
    findAllWords(node, prefix){
        let word = [];
        if(node.endWord){
            word.push(prefix);
        }
        for(let ch in node.children){
            word.push(...this.findAllWords(node.children[ch],prefix+ch))
        }
        return word;
    }
}

const t = new Trie();
t.insert("apple")
t.insert("applecyder");
t.insert("orange");
console.log(t.findWordWithPrefix("app"))



