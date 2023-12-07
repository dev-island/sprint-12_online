import nf from './node.js';

/**
 *
 * contains(value) returns true if the passed in value is in the list and otherwise returns false.
 * find(value) returns the index of the node containing value, or null if not found.
 * toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
 *
 * Extra credit
 * insertAt(value, index) that inserts a new node with the provided value at the given index.
 * removeAt(index) that removes the node at the given index.
 *
 * Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
 */

const LinkedList = function () {
  let listHead = null;

  function append(value) {
    // * adds a new node containing value to the end of the list
    if (!listHead) return prepend(value);

    const currTail = tail();
    const node = nf(value);
    currTail.nextNode = node;
  }

  function prepend(value) {
    // * adds a new node containing value to the start of the list
    const node = nf(value, listHead);
    listHead = node;
  }

  function head() {
    // * returns the first node in the list
    return listHead;
  }

  function tail() {
    // * returns the last node in the list
    let item = listHead;
    while (item?.nextNode) {
      item = item.nextNode;
    }
    return item;
  }

  function size() {
    // * returns the total number of nodes in the list
    let length = 0;
    let item = listHead;
    while (item) {
      length++;
      item = item.nextNode;
    }
    return length;
  }

  function pop() {
    // * removes the last element from the list
    if (!listHead || !listHead.nextNode) return (listHead = null);

    let prevItem = null;
    let currItem = listHead;
    while (currItem.nextNode) {
      prevItem = currItem;
      currItem = currItem.nextNode;
    }
    prevItem.nextNode = null;
  }

  function at(index) {
    //* returns the node at the given index
    if (!listHead) return null;

    let item = listHead;
    for (let i = 1; i < index; i++) {
      if (!item) break;
      item = item?.nextNode;
    }

    return item;
  }

  return { append, at, head, pop, prepend, size, tail };
};

export default LinkedList;
