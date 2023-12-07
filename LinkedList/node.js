const node = function (nodeValue = null, next = null) {
  const value = nodeValue;
  const nextNode = next;

  return { value, nextNode };
};

export default node;
