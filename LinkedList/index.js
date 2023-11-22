
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  head() {

  }

  tail() {

  }

  at(index ) {
      
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
  }

  delete(value) {
  }

  find(value) {

  }

  contains(value) {

  }

  pop() {

  }

  toString() {
  }

  insertAt(value, index) {

  }

  removeAt(index) {

  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.print(); // Output: 0 -> 1 -> 2 -> 3
linkedList.delete(2);
linkedList.print(); // Output: 0 -> 1 -> 3
