import test from 'ava';
import linkedList from './linked-list.js';

const list = linkedList();

test('empty list', (t) => {
  t.is(list.head(), null);
  t.is(list.tail(), null);
});

// ***** PREPEND ******

test('prepend a node to an empty list', (t) => {
  list.prepend('test1');

  const expected = { value: 'test1', nextNode: null };
  t.deepEqual(list.head(), expected);
  t.deepEqual(list.tail(), expected);
});

test('prepend a node to a non empty list', (t) => {
  const currHead = list.head();

  list.prepend('test2');
  t.deepEqual(list.head(), { value: 'test2', nextNode: currHead });
});

// ***** APPEND ******

test('append a node to an empty list', (t) => {
  const tmpList = linkedList();

  tmpList.append('test3');
  const expected = { value: 'test3', nextNode: null };
  t.deepEqual(tmpList.head(), expected);
  t.deepEqual(tmpList.tail(), expected);
});

test('append a node to a non empty list', (t) => {
  list.append('test3');
  t.deepEqual(list.tail(), { value: 'test3', nextNode: null });
});

// ***** SIZE ******

test('it should return 0 for an empty list', (t) => {
  const tmpList = linkedList();
  t.is(tmpList.size(), 0);
});

test('it should return the correct size of the running list', (t) => {
  t.is(list.size(), 3);
});

test('it should accuratley return the size of the list', (t) => {
  const tmpList = linkedList();
  tmpList.append('test1');

  t.is(tmpList.size(), 1);

  tmpList.append('test2');
  tmpList.append('test3');
  tmpList.append('test4');

  t.is(tmpList.size(), 4);
});

// ***** AT ******
test('should return null on an empty list', (t) => {
  const tmpList = linkedList();
  t.is(tmpList.at(0), null);
  t.is(tmpList.at(1), null);
  t.is(tmpList.at(6), null);
  t.is(tmpList.at(10), null);
});

test('should find an element at the current index', (t) => {
  const tmpList = linkedList();
  for (let i = 0; i < 100; i++) {
    tmpList.append(`item${i}`);
  }
  t.is(tmpList.size(), 100);
  t.is(tmpList.at(10).value, 'item9');
  t.is(tmpList.at(21).value, 'item20');
  t.is(tmpList.at(55).value, 'item54');
  t.is(tmpList.at(1).value, 'item0');
});

test('should return null if the index is greater than the size', (t) => {
  const tmpList = linkedList();
  for (let i = 0; i < 10; i++) {
    tmpList.append(`item${i}`);
  }
  t.is(tmpList.size(), 10);
  t.is(tmpList.at(10).value, 'item9');
  t.is(tmpList.at(20), null);
});

// ***** POP ******
test('should work on an empty list', (t) => {
  const tmpList = linkedList();
  t.is(tmpList.size(), 0);
  tmpList.pop();
  t.is(tmpList.size(), 0);
});

test('should work on a list with one item', (t) => {
  const tmpList = linkedList();
  tmpList.append('item1');
  t.is(tmpList.size(), 1);
  tmpList.pop();
  t.is(tmpList.size(), 0);
  t.pass();
});

test('should remove the last item', (t) => {
  const curTail = list.tail();
  list.pop();
  t.not(list.tail(), curTail);
});

// ***** CONTAINS ******
test.todo('contains');

// ***** FIND ******
test.todo('find');

// ***** TOSTRING ******
test.todo('toString');

// ***** INSERTAT ******
test.todo('insertAt');

// ***** REMOVE ******
test.todo('removeAt');
