import { trace } from "./../trace";

const parenthesesGeneratorRecurse = function recursive(
  soFar,
  open,
  closed,
  max,
  result
) {
  trace({
    type: "initRecursive",
    line: 3,
    environment: { result, soFar, open, closed, max },
    calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
  });

  // We've reached base case
  if (
    trace({
      type: "compare",
      line: 5,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    }) &&
    soFar.length === max * 2
  ) {
    // push to solution
    result.push(soFar);

    trace({
      type: "AddToSolution",
      line: 6,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    });

    trace({
      type: "return",
      line: 7,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    });
    return;
  }

  // Case 2 : Open < Max, Recurse Again with '('
  if (
    trace({
      type: "compare",
      line: 10,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    }) &&
    open < max
  ) {
    // start another recursive call
    trace({
      type: "recurse",
      line: 11,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    });

    parenthesesGeneratorRecurse(`${soFar}(`, open + 1, closed, max, result);

    // add returnRecursive after recursive call completes
    trace({
      type: "returnRecursive",
      line: 11,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    });
  }

  // Case 3 : Closed < Open, Recurse Again with ')'
  if (
    trace({
      type: "compare",
      line: 14,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    }) &&
    closed < open
  ) {
    // start another recursive call
    trace({
      type: "recurse",
      line: 15,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    });

    parenthesesGeneratorRecurse(`${soFar})`, open, closed + 1, max, result);

    // add returnRecursive after recursive call completes
    trace({
      type: "returnRecursive",
      line: 15,
      environment: { result, soFar, open, closed, max },
      calledWith: `parenthesesGeneratorRecurse(${soFar}, ${open}, ${closed}, ${max}`
    });
  }
};

const parenthesesGeneratorWrapper = function wrapper(n) {
  trace({
    type: "initWrapper",
    line: 0,
    environment: { n }
  });

  const result = [];

  trace({
    type: "assign",
    line: 1,
    environment: { n, result }
  });

  const soFar = "";
  const open = 0;
  const closed = 0;
  const max = n;

  // invoke recursive function
  trace({
    type: "firstRecursiveCall",
    line: 19,
    environment: { n, result }
  });

  parenthesesGeneratorRecurse(soFar, open, closed, max, result);

  trace({
    type: "returnRecursive",
    line: 19,
    environment: { n, result }
  });

  trace({
    type: "finishWrapper",
    line: 20,
    environment: { n, result }
  });

  return result;
};

export default parenthesesGeneratorWrapper;
