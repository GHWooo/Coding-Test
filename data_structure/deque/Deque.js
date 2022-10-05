class Node{
    constructor(item){
        this.item = item;
        this.prev = null;
        this.next = null;
    }
}
  
class Deque{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push_front(item){
        const node = new Node(item);
        if(this.size()==0){
        this.head = node;
        this.tail = node;
        }else{
        this.head.prev = node;
        node.next=this.head;
        this.head = node;
        }
        this.length+=1; 
    }


    push_back(item){
        const node = new Node(item)
        if(this.size()==0){
        this.head = node;
        this.tail = node;
        }else{
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node; 
        }
        this.length +=1;
    }

    pop_front(){
        if(this.size()==0) return -1;
        const popItem = this.head;
        this.head = this.head.next;
        if(this.size()==1){
            this.head = null;
        }else{
            this.head.prev = null;
        }
        this.length -=1;
        return popItem.item;
    }

    pop_back(){
        if(this.size()==0) return -1;
        const popItem = this.tail;
        this.tail = this.tail.prev;
        if(this.size()==1){
            this.tail = null;
        }else{
            this.tail.next = null;
        }
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

