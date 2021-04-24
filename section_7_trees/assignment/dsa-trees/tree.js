/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(){
    if(!this.root) return 0;
    
    let total = this.root.val;

    function sumHelper(node){
      // want to go through each child of a node 
      for(let child of node.children){
        // grab the value and add it to the total
        total += child.val;
        // check for any children
        if(child.children.length > 0){
          // then we reapply the sum helper using that child as a node 
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total;
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if there is no root then we just return 0
    if(!this.root) return 0;
    // if the initial root is the only node and it is even then we set the count to 1 , otherwise we start at 0
    let evenCount = this.root.val % 2 === 0 ? 1: 0;
    // create a helper function and accept a node as an argument
    function countEvensHelper(node){
      // loop through the children of the node we pass in 
      for(let child of node.children){
        // check the value of the child and if it is even add to the even count
        if(child.val % 2 ===0) evenCount ++;
        // check if that child has children and then recurse through the child node with the even counter if it has children
        if(child.children.length > 0){
          countEvensHelper(child)
        }
      }
    }
    // call the helper function on our root node 
    countEvensHelper(this.root);
    // return the count of the even numbers in the tree 
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // if no root then we return 0
    if(!this.root) return 0;
    // set a variable for greater count, if there is onl;y one node (the root) and it is greater then the lower bound then we only have 1 val greater than the argument , otherwise we start at 0
    let greaterCount = this.root.val > lowerBound ? 1: 0;
    // create a help function that we can use to count child nodes 
    function greaterCountHelper(node){
      // loop through the children
      for(let child of node.children){
        // if the value is greater than the lower bound lets add one to the count
        if(child.val > lowerBound) greaterCount++;
        if(child.children.length > 0){
          greaterCountHelper(child)
        }
      }
    }
    greaterCountHelper(this.root);
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
