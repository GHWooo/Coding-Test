class MinHeap{
    constructor() {
        this.items = [];
    }
    swap(index1, index2){
        const temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }
    parentIndex(index){ return Math.floor((index - 1) / 2); }
    leftChildIndex(index){ return index * 2 + 1; }
    rightChildIndex(index){ return index * 2 + 2; }
    parent(index){ return this.items[this.parentIndex(index)]; }
    leftChild(index){ return this.items[this.leftChildIndex(index)]; }
    rightChild(index){ return this.items[this.rightChildIndex(index)]; }
    peek(){ return this.items[0]; }
    size(){ return this.items.length; }

    // 마지막 인덱스의 값을 올리면서 정렬하는 메서드
    bubbleUp(){
        // 가장 마지막 인덱스를 저장한다.
        let index = this.items.length - 1;
        // 현재 인덱스의 부모 노드가 존재하고, 부모 노드 값보다 현재 인덱스의 값이 작을 동안 반복한다.
        while(this.parent(index) !== undefined && this.parent(index) > this.items[index]){
            // 현재 인덱스의 값과 부모 인덱스의 값을 교체한다.
            this.swap(index, this.parentIndex(index));
            // 현재 인덱스를 부모 인덱스로 수정한다.
            index = this.parentIndex(index);
        }
    }
    // 최상단 인덱스의 값을 내리면서 정렬하는 메서드
    bubbleDown(){
        // 최상단 인덱스를 저장한다.
        let index = 0;
        // 현재 인덱스의 왼쪽 자식 노드가 존재하고, 왼쪽 자식 노드의 값과 오른쪽 자식 노드의 값이 현재 인덱스의 값보다 작을 동안 반복한다.
        while(this.leftChild(index) != undefined && 
        (this.leftChild(index) < this.items[index] || this.rightChild(index < this.items[index]))){
            // 우선 왼쪽 자식 인덱스를 저장한다.
            let smallerIndex = this.leftChildIndex(index);
            // 오른쪽 자식 노드 값이 존재하고 오른쪽 자식 노드의 값이 왼쪽 자식 노드의 값보다 작다면
            if(this.rightChild(index) !== undefined && this.rightChild(index) < this.items[smallerIndex]){
                // 오른쪽 자식 인덱스로 수정한다.
                smallerIndex = this.rightChildIndex(index);
            }
            // 현재 인덱스의 값과 저장했던 자식 인덱스의 값을 교체한다.
            this.swap(index, smallerIndex);
            // 현재 인덱스를 저장했던 자식 인덱스로 수정한다.
            index = smallerIndex;
        }
    }
    // 힙에 원소를 추가하는 메서드
    add(item){
        // 가장 마지막 인덱스 뒤에 원소를 추가한다.
        this.items[this.items.length] = item;
        // 추가된 원소를 올리면서 정렬한다.
        this.bubbleUp();
    }
    // 힙에서 최상단 원소를 빼내는 메서드
    poll(){
        // 최상단 원소를 따로 저장한다.
        let item = this.items[0];
        // 가장 마지막 인덱스의 원소를 첫번째 원소로 복사한다.
        this.items[0] = this.items[this.items.length - 1];
        // 가장 마지막 인덱스의 원소를 삭제한다.
        this.items.pop();
        // 복사된 최상단 원소를 내리면서 정렬한다.
        this.bubbleDown();
        // 저장해둔 원소를 반환한다.
        return item;
    }
}