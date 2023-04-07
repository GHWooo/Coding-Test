class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.front = null;
  }

  isEmpty() {
    if (this.front === null) return true;
    return false;
  }

  add(item) {
    const node = new Node(item);

    if (!this.isEmpty()) node.next = this.front;

    this.front = node;

    this.up();
  }

  up() {
    const current = this.front;
    let pre = null;

    while (current.next !== null) {
      if (current.next.item <= current.item) break;

      const temp = current.next;
      current.next = temp.next;
      temp.next = current;

      if (pre !== null) pre.next = temp;
      pre = temp;

      if (this.front === current) this.front = temp;
    }
  }

  poll() {
    const answer = this.front.item;
    this.front = this.front.next;

    return answer;
  }
}
