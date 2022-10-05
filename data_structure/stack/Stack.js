class Node{
    constructor(item){
        this.item = item;
        this.next = null;
    }
}
  
class Stack{
    constructor(){
        this.topOfStack = null;
        this.length = 0;
    }

    push(item){
        const node = new Node(item);
        if(this.topOfStack!=null){
        node.next = this.topOfStack; 
        }
        this.topOfStack = node;
        this.length+=1;
    }

    pop(){
        if(this.length==0)return -1;
        const popItem = this.topOfStack;
        this.topOfStack = popItem.next;
        this.length-=1;

        return popItem.item
    }

    size(){
        return this.length;
    }

    empty(){
        if(this.length==0) return 1;
        else return 0;
    }

    top(){
        if(this.length==0)return -1;
        return this.topOfStack.item; 
    }
}