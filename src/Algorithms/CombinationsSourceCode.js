const CombinationsSourceCode = `const combine = function(A, B) {
  const result = [];
  //first generate list
  const list = [];
  for (let i = 1; i <= A; i++) {
    list.push(i);
  }

  const recurse = function(startIndex, soFar) {
    if (soFar.length === B) {
      result.push(soFar.slice());
      return;
    }

    for (let i = startIndex; i < list.length; i++) {
      let currentElem = list[i];
      soFar.push(currentElem);
      recurse(i + 1, soFar);
      soFar.pop();
    }
  };

  recurse(0, []);
  return result;
};`;

export default CombinationsSourceCode;
