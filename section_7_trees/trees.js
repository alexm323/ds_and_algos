class Node {
    constructor(val, children=[]){
        this.val = val;
        this.children = children;
    }
    findDFS(val){
        // we are going to use a stack data structure 
        // we can create one using an array where we just add and remove from the end 
        // this is referring to whatever we called find on , in this case HTML element node 
        const toVisitStack = [this];
        // is there a length to the stack? yes? then we pop it off
        while(toVisitStack.length){
            const current = toVisitStack.pop();
            console.log(`Visiting: ${current.val}`)
            // is the value equivalent to what we are looking for 
            if(current.val === val){
                return current;
            }
            // for each child of current , we are going to push them in the to visit stack , push in the head node and body node and then we check those and pop those values 
            for(let child of current.children){
                toVisitStack.push(child)
            }
        }
    }

    findBFS(val){
        // we are going to use a stack data structure 
        // we can create one using an array where we just add and remove from the end 
        // this is referring to whatever we called find on , in this case HTML element node 
        const toVisitQueue = [this];
        // we will not pop from the end here we will shift from the beginning, the thing that has been in there the longest 


        while(toVisitQueue.length){
            const current = toVisitQueue.shift();
            console.log(`Visiting: ${current.val}`)
            // is the value equivalent to what we are looking for 
            if(current.val === val){
                return current;
            }
            // for each child of current , we are going to push them in the to visit Queue , push in the head node and body node and then we check those and pop those values 
            for(let child of current.children){
                toVisitQueue.push(child)
            }
        }
    }


}

class Tree {
    constructor(root){
        this.root = root;

    }
    findInTreeDFS(val){
        return this.root.findDFS(val)
    }
    findInTreeBFS(val){
        return this.root.findBFS(val)
    }
}

let amy = new Node('amy', [new Node('bob'),new Node('barb'),new Node('barry')]);

let htmlElement = new Node('html', [new Node('head', [new Node('title'), new Node('body',[new Node('ul', [new Node('li'), new Node('li')])])])])