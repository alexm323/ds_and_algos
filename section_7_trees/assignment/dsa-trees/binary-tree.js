/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // check if there is a root at all
    if (!this.root) return 0;
    // create a helper function to help us count to a leaf node 
    function minDepthHelper(node){
      // if both the left and right children are null then we know that we are already on a leaf node on the root 
      if(node.left === null && node.right === null) return 1;
      // need if statements for the right and left children nodes 
      // if the left is null then we try to traverse along the right but we recurse and call this function back on the right node and we add one to our count of the depth of the node 
      if(node.left === null) return minDepthHelper(node.right) + 1;
      // then for the opposite case 
      if(node.right === null) return minDepthHelper(node.left) + 1;
      // we want the min depth so we can use Math.min static method to see if the left or right path as the least and add 1 since we also have the root node to take into account
      return (
        Math.min(minDepthHelper(node.left),minDepthHelper(node.right)) +1
      );
    }
    return minDepthHelper(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // no root then we return 0
    if(!this.root) return 0;
    // lets make a function we can call recursively to find the longest chain of depth 
    function maxDepthHelper(node){
      // in the case the root node is our only node 
      if(node.left === null && node.right === null) return 1;
      // in case we come to a node that has a null left side 
      if(node.left === null) return maxDepthHelper(node.right) + 1;
      // and the inverse as well
      if(node.right === null) return maxDepthHelper(node.left) + 1;

      return(
        Math.max(maxDepthHelper(node.left),maxDepthHelper(node.right)) + 1
      );
    }
    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // lets keep track of the result of the sum 
    let sum = 0;
    // create a helper we can call recursively 
    function maxSumHelper(node){
      // if the node is null then we no there is no sum to be found 
      if(node === null) return 0;
      // need to track the left and right sums 
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      // we want to give the result the maximum value of all of our values 
      sum = Math.max(sum, node.val + leftSum + rightSum);
      // want to make sure we are taking the optimal path so we return the max value 
      return Math.max(0,leftSum + node.val, rightSum + node.val)
    }
    maxSumHelper(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

   nextLarger(lowerBound) {
    //  if we are on the root then there can be no next smaller value
    if (!this.root) return null;
    // create a queue to use Breadth first search 
    let queue = [this.root];
    // set the closes value variable
    let closest = null;
    // while there are items in the queue we want to check the nodes
    while (queue.length) {
      // remove and return the first element of the queue with shift
      let currentNode = queue.shift();
      // set the current value
      let currentVal = currentNode.val;
      // find whether or not the value is higher than the lower bound
      let higherThanLowerBound = currentVal > lowerBound;
      // assign the closest smaller value 
      let shouldReassignClosest = currentVal < closest || closest === null;
      
      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
