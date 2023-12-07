import test from 'ava';
import knightMoves from './index.js';

knightMoves([0, 0], [1, 2]);

test.skip('handles no input', (t) => {
  const err = t.throws(() => knightMoves(), { instanceOf: TypeError });
  t.is(err.message, 'Start and Finish points must be an array');
});

test.skip('test the path', (t) => {
  t.deepEqual(knightMoves([3, 3], [4, 3]));

  t.deepEqual(knightMoves([3, 3], [4, 5], [2, 4], [4, 3]));
});
