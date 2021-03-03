// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// const firstPage = new Node('www.google.com');
// const secondPage = new Node('www.reddit.com');
// const thirdPage = new Node('www.amazon.com');

// firstPage.next = secondPage;
// secondPage.next = thirdPage;

class Node {
    constructor(val, next=null){
        this.val = val;
        this.next = next;
    }
}

const firstPage = 
    new Node('www.google.com',
        new Node ('www.reddit.com', 
            new Node('www.amazon.com',
                new Node('www.youtube.com'))));

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    traverse() {
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    find(val){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.val === val) return true;
            currentNode = currentNode.next;
    }
        return false;
    }
    // append(val){
    //     let currentNode = this.head;
    //     while(currentNode.next){
    //         currentNode = currentNode.next;
    //     }
    //     currentNode.next = new Node(val);
    // }
    append(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }
}
    

// const history = new LinkedList();
// history.head = firstPage;

// history.traverse();

const train = new LinkedList();
train.append('Engine')
train.append('Freight Car 1')
train.append('Freight Car 2')
train.append('Caboose')