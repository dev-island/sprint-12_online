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
  const setParent = (parentSq) =>
    !parent ? (parent = parentSq) : (parent = parent);

  const getName = () => `${x}, ${y}`;
  const getMoves = () => moves;

  if (!visited.has(getName())) {
    const sq = { getParent, parent, getMoves, getName, setParent };
    visited.set(getName(), sq);
    return sq;
  }
}

export default function knightMoves(startCoords, finishCoords) {
  const start = square(startCoords);
  const finish = square(finishCoords);

  let queue = [finish];

  while (queue.length > 0) {
    const currSquare = queue.shift();

    const enqueueList = currSquare
      .getMoves()
      .map((mCoords) => square(mCoords, currSquare))
      .filter(Boolean);
    queue.push(...enqueueList);
  }
  console.log(queue);
  console.log(start.getParent());
  console.log(finish.getParent());
}
