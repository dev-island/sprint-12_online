const min = 0;
const max = 7;
const visited = new Map();
const possibleMoves = [
  [1, 2],
  [-1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
];

function getPossibleMoves([x, y]) {
  return possibleMoves.map(([xMove, yMove]) => {
    const newX = x + xMove;
    const newY = y + yMove;

    if (newX >= min && newX <= max && newY >= min && newY <= max) {
      return [newX, newY];
    }
  });
}

function square([sqX, sqY], sqParent) {
  const x = sqX;
  const y = sqY;
  let parent = sqParent;
  let moves = getPossibleMoves([x, y]).filter(Boolean);

  const getParent = () => parent;
  const setParent = (parentSq) => {
    parent ||= parentSq;
  };

  const getName = () => `${x}, ${y}`;
  const getMoves = () => moves;

  if (!visited.has(getName())) {
    const sq = { getParent, parent, getMoves, getName, setParent };
    visited.set(getName(), sq);
    return sq;
  }
}

/**
 * Calculates the shortest path for a knight on a chessboard from the start coordinates to the finish coordinates.
 * @param {number[]} startCoords - The coordinates of the starting position [x, y].
 * @param {number[]} finishCoords - The coordinates of the finishing position [x, y].
 * @returns {string[]} - The path of coordinates representing the shortest path from start to finish.
 * @throws {TypeError} - If startCoords or finishCoords are not arrays.
 * @throws {Error} - If the coordinates are out of bounds.
 */
export default function knightMoves(startCoords, finishCoords) {
  if (!Array.isArray(startCoords) || !Array.isArray(finishCoords)) {
    throw new TypeError('Start and Finish points must be an array');
  } else if (
    [...startCoords, ...finishCoords].some((i) => i > max || i < min)
  ) {
    throw new Error(
      `The values may not be larger than ${max} or smaller than ${min}`
    );
  }
  visited.clear();
  const finish = square(finishCoords, 'finish');

  let queue = [finish];

  let startName = startCoords.join(', ');
  let revs = 0;
  while (!queue.find((i) => i.getName() === startName)) {
    revs++;
    const currSquare = queue.shift();

    const enqueueList = currSquare
      .getMoves()
      .map((mCoords) => square(mCoords, currSquare))
      .filter(Boolean);
    queue.push(...enqueueList);
  }
  console.log({ revs });
  const start = visited.get(startName);

  let path = [];
  let currSq = start;
  while (currSq?.getParent?.()) {
    path.push(currSq.getName());
    currSq = currSq?.getParent?.();
  }

  console.log(
    `The shortest path was ${path.length - 1} move${
      path.length - 1 > 1 ? 's' : ''
    }!
  The moves were:
  ${path.join('\n')}
    `
  );

  return path;
}
