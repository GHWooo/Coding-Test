class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}
  
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(item){
        const node = new Node(item)
        if(this.head==null){
        this.head= node;
        }else{
        this.tail.next = node;
        }

        this.tail = node;
        this.length +=1;
    }

    pop(){
        const popItem = this.head;
        this.head = this.head.next;
        this.length -=1;
        return popItem.item;
    }

    size(){
        return this.length;
    }

    empty(){
        if(this.length==0){
        return 1;
        }else{
        return 0;
        }
    }

    front(){
        if(this.empty()==1) return -1;
        return this.head.item; 
    }

    back(){
        if(this.empty()==1) return -1;
        return this.tail.item; 
    }
}