class Heap{
    constructor() {
        this.items = [];
    }
    // index1 위치의 값과 index2 위치의 값을 바꾸는 메서드
    swap(index1, index2){
        const temp = this.items[index1];
        this.times[index1] = this.items[index2];
        this.items[index2] = temp;
    }
    // index 위치의 값의 부모 인덱스를 구하는 메서드
    parentIndex(index){
        return Math.floor((index - 1) / 2);
    }
    // index 위치의 값의 왼쪽 자식 인덱스를 구하는 메서드
    leftChildIndex(index){
        return index * 2 + 1;
    }
    // index 위치의 값의 오른쪽 자식 인덱스를 구하는 메서드
    rightChildIndex(index){
        return index * 2 + 2;
    }
    // index 위치의 값의 부모 노드를 구하는 메서드
    parent(index){
        return this.items[this.parentIndex(index)];
    }
    // index 위치의 값의 왼쪽 자식 노드를 구하는 메서드
    leftChild(index){
        return this.items[this.leftChildIndex(index)];
    }
    // index 위치의 값의 오른쪽 자식 노드를 구하는 메서드
    rightChild(index){
        return this.items[this.rightChildIndex(index)];
    }
    // 최상단의 노드를 반환하는 메서드
    peek(){
        return this.items[0];
    }
    // 힙의 크기(항목 개수)를 반환하는 메서드
    size(){
        return this.items.length;
    }
}