class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if there is no root values in the tree we should isnert one 
    if(this.root === null){
      // create a new node
      this.root = new Node(val);
      // return the tree (which is what this is referring to)
      return this;
    }
    // if it has values then we should find a spot for it on the tree
  // very similar to searching for a value 
    // have our current Node available if there is one
    let currentNode = this.root;
    // should run until the value is placed and the return statements will break us out of the loop
    while(true){
      // if the value of our current node is less than the value that we want to insert it will go to the right 
      if(currentNode.val < val){
        // if there is no right value existing then we can create a new node to be the right value of the current node
        if(currentNode.right === null){
          currentNode.right = new Node(val);
          // we return the tree
          return this;
          // otherwise we have to traverse to the existing right node and then we check it again because the while loop wont break unless the value is inserted
        } else{
          currentNode = currentNode.right;
        }
        // this is the inverse where we insert values to the left
      } else if(currentNode.val > val){
        // if there is no left valye
        if(currentNode.left === null){
          // create a new node at the left valye
          currentNode.left = new Node(val);
          // return the tree
          return this;
          // otherwise we traverse to that node and the loop starts again 
        } else{
          currentNode = currentNode.left;
        }
      }

    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode=this.root) {
    if(this.root === null){
      // create a new node
      this.root = new Node(val);
      // return the tree (which is what this is referring to)
      return this;
    }
    if(currentNode.val < val){
      if(currentNode.right===null){
        currentNode.right = new Node(val);
        return this;
      }else{
        this.insertRecursively(val,currentNode.right)
      }
    } else if(currentNode.val > val){
      if(currentNode.left===null){
        currentNode.left = new Node(val);
        return this;
      }else{
        this.insertRecursively(val,currentNode.left)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // if there is nothing in the tree, return undefined
    if(this.root === null) return undefined;
    // if there is a value then we can check the current Nodes 
    let currentNode = this.root;
    
    // otherwise we have to traverse the tree based on the value 
    while(true){
      // if the current Node value is the one we are searching for, then great we found it ! 
      if(currentNode.val === val) return currentNode;
      // if the value of the currentnode is less than the value we want then we have to move right along the tree 
      if(currentNode.val < val){
        // check if there is a right value from the current node 
        if(currentNode.right === null){
          // if there isnt then we just return undefined 
          return undefined;
        }else{
          currentNode = currentNode.right;
        }
      } else if(currentNode.val > val){
        // check if there is a right value from the current node 
        if(currentNode.left === null){
          // if there isnt then we just return undefined 
          return undefined;
        }else{
          currentNode = currentNode.left;
        }
      }

    }


  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode=this.root) {
    // if there is no root then there is nothing in the tree and we just return undefined 
    if(this.root === null) return undefined;
    //  if the current Node has the value we want then we just return it 
    if(currentNode.val === val) return currentNode;
    // if the value weare looking for is greater than our current node value then we must move to the right
    if(currentNode.val < val){
      // if there is no value to the right then we know that the value is not in the tree
      if(currentNode.right === null){
        return undefined;
      }else{
        return this.findRecursively(val,currentNode.right)
      }

    }else if(currentNode.val > val){
      if(currentNode.left === null){
        return undefined;
      }else{
        return this.findRecursively(val,currentNode.left)
      }
    }


  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    let currentNode = this.root;

    function traverse(node){
      visitedNodes.push(node.val);
      node.left && traverse(node.left)
      node.right && traverse(node.right);
    }
    
    traverse(currentNode);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];
    let currentNode = this.root;

    function traverse(node){
      
      node.left && traverse(node.left)
      visitedNodes.push(node.val);
      node.right && traverse(node.right);
    }
    
    traverse(currentNode);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];
    let currentNode = this.root;

    function traverse(node){
      
      node.left && traverse(node.left)
      
      node.right && traverse(node.right);

      visitedNodes.push(node.val);
    }
    
    traverse(currentNode);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // need to use a queue when we are doing breadth first searching 
    let currentNode = this.root;
    let queue = [];
    let visitedNodes = [];
    // push our current value into our queue array 
    queue.push(currentNode);
    // while there are still elements in our queue array
    while (queue.length) {
      // first in is the first out so we work with the oldest item
      currentNode = queue.shift();
      // push the current value into our visited Nodes array
      visitedNodes.push(currentNode.val);
      // if there is a left side that exists 
      if (currentNode.left) {
        // push that into our queue to work on 
        queue.push(currentNode.left);
      }
      // after the left side if a right side exists then we can push that into the queue
      if (currentNode.right) {
        // push that right value into the queue
        queue.push(currentNode.right);
      }
    }
    // return the array of nodes we have visited 
    return visitedNodes;
  }
}

module.exports = BinarySearchTree;
