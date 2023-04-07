class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    if (this.front === null) return true;
    return false;
  }

  add(item) {
    const node = new Node(item);

    if (!this.isEmpty()) this.back.next = node;
    else this.front = node;

    this.back = node;
  }

  poll() {
    const answer = this.front.item;
    this.front = this.front.next;

    return answer;
  }
}
