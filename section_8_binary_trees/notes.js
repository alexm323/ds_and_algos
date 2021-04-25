class Node {
    constructor(val,left=null,right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
    find(sought){
        // this lets us start our search from any part of the tree
        let currentNode = this;
        // while there is a current node 
        while(currentNode){
            console.log(`Visiting`, currentNode.val)
            if(currentNode.val === sought) return currentNode;
        // if the value is greater than what i am looking for 
            if(currentNode.val > sought){
                // then we move to the left
                currentNode = currentNode.left;
            }else{
                currentNode = currentNode.right;
            }
        }
    }
}
class BinarySearchTree{
    constructor(root=null){
        this.root = root;
    }
    traverse(node=this.root){
        // traverse the left side
        if(node.left) this.traverse(node.left);
        // when thats done I want you to print E or something 
        console.log(node.val);
        // then traverse the right side but we are doing this recursively 
        if(node.right) this.traverse(node.right);



    }
}
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left= F;

const tree = new BinarySearchTree(E);