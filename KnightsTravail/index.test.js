import test from 'ava';
import knightMoves from './index.js';

test('handles no input', (t) => {
  const err = t.throws(() => knightMoves(), { instanceOf: TypeError });
  t.is(err.message, 'Start and Finish points must be an array');
});

test('handles out of bounds range', (t) => {
  let err = t.throws(() => knightMoves([-1, 3], [4, 3]), { instanceOf: Error });
  t.is(err.message, 'The values may not be larger than 7 or smaller than 0');

  t.throws(() => knightMoves([1, 8], [4, 3]), { instanceOf: Error });
  t.throws(() => knightMoves([1, 2], [4, 9]), { instanceOf: Error });
  t.throws(() => knightMoves([1, 2], [-4, 3]), { instanceOf: Error });
});

test('test the path length', (t) => {
  t.is(knightMoves([3, 3], [4, 3]).path.length - 1, 3);
  t.is(knightMoves([3, 3], [7, 6]).path.length - 1, 3);
  t.is(knightMoves([0, 0], [7, 7]).path.length - 1, 6);
  t.is(knightMoves([7, 6], [0, 0]).path.length - 1, 5);
  t.is(knightMoves([0, 1], [2, 2]).path.length - 1, 1);
  t.is(knightMoves([3, 0], [3, 4]).path.length - 1, 2);
  t.is(knightMoves([7, 1], [6, 1]).path.length - 1, 3);
});

test('handles invalid input', (t) => {
  t.throws(() => knightMoves('start', [4, 3]), { instanceOf: TypeError });
  t.throws(() => knightMoves([1, 2], 'finish'), { instanceOf: TypeError });
  t.throws(() => knightMoves(null, [4, 3]), { instanceOf: TypeError });
  t.throws(() => knightMoves([1, 2], undefined), { instanceOf: TypeError });
});

test('handles non-integer input', (t) => {
  t.throws(() => knightMoves([3.5, 3], [4, 3]), { instanceOf: TypeError });
  t.throws(() => knightMoves([1, 2], [4, 3.5]), { instanceOf: TypeError });
  t.throws(() => knightMoves([1, 2.5], [4, 3]), { instanceOf: TypeError });
});

test('handles non-array input', (t) => {
  t.throws(() => knightMoves(3, [4, 3]), { instanceOf: TypeError });
  t.throws(() => knightMoves([1, 2], { x: 4, y: 3 }), {
    instanceOf: TypeError,
  });
  t.throws(() => knightMoves([1, 2], '4, 3'), { instanceOf: TypeError });
});
