/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      this.tail.next = newNode;
    this.tail = newNode;
    }
    // didnt realize the length was a value that we made in the constructor at first so I was racking my brain trying to figure out why the node was changed but the length was not 
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newHead = new Node(val);
    if(!this.head){
      this.head = newHead;
      this.tail = newHead;
    } else{
      // kept writing this backwards
      newHead.next = this.head
      this.head = newHead;
    }
    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.length){
      return null;
    } else{
      let currentNode = this.head;
      let previousNode = this.head
      while(currentNode.next){
        previousNode = currentNode
        currentNode = currentNode.next;
      
      }
    previousNode.next = null;
    this.tail = previousNode;
    // console.log('End of the line')
    this.length -= 1;
    
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentNode.val;
    }
    
    
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      return null;
    } else{
      const removeNode = this.head;
      this.head = this.head.next;
      this.length -=1;

      if(!this.length){
        this.tail = null;
      }

      return removeNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length){
      return null;
    } else{
      let currentNode = this.head;
      let count = 0;

      while(count < idx){
        currentNode = currentNode.next;
        count +=1;
      }
      return currentNode.val;
    }

  }
  getNodeAt(idx) {
    if (idx < 0 || idx >= this.length){
      return null;
    } else{
      let currentNode = this.head;
      let count = 0;

      while(count < idx){
        currentNode = currentNode.next;
        count +=1;
      }
      return currentNode;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.getNodeAt(idx);
    if (currentNode) {

      currentNode.val = val;

      return currentNode;
    } else {
      return null;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length){
      return null
    } else if(idx === 0){
      return this.unshift(val);
    } else if(idx === this.length){
      return this.push(val)
    } else  {
      let previousNode = this.getNodeAt(idx - 1);
      let newNode = new Node(val);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length +=1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length){
      return null
    } else if(idx === 0){
      return this.shift();
    } else if(idx === this.length -1){
      return this.pop()
    } else  {
      let previousNode = this.getNodeAt(idx - 1);
      let removeNode = previousNode.next;
      previousNode.next = removeNode.next;
      
      this.length +=1;
      return removeNode.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
