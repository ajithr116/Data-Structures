
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
    findLongestWord() {
        return this.findLongest(this.root, "");
    }
    
    findLongest(node, word) {
        let longestWord = node.endWord ? word : "";
        for (let ch in node.children) {
            let childLongestWord = this.findLongest(node.children[ch], word + ch);
            if (childLongestWord.length > longestWord.length) {
                longestWord = childLongestWord;
            }
        }
        return longestWord;
    }
    
}

const t = new Trie();
t.insert("apple")
t.insert("applecyder");
t.insert("orange");
console.log(t.findLongestWord())