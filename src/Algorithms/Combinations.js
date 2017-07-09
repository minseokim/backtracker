import { trace } from "./../trace";

const CombinationsWrapper = function CombinationsWrapper(A, B) {
  trace({
    type: "initWrapper",
    line: 0,
    environment: { A, B }
  });

  const result = [];
  trace({
    type: "assign",
    line: 1,
    environment: { A, B, result }
  });

  const list = [];
  trace({
    type: "assign",
    line: 3,
    environment: { A, B, result, list }
  });
  for (let i = 1; i <= A; i += 1) {
    trace({
      type: "loop",
      line: 4,
      environment: { A, B, result, list, i }
    });
    list.push(i);
    trace({
      type: "push",
      line: 5,
      environment: { A, B, result, list, i }
    });
  }

  // invoke recursive function
  trace({
    type: "firstRecursiveCall",
    line: 21,
    environment: { A, B, result }
  });

  const CombinationsRecurse = function CombinationsRecurse(startIndex, soFar) {
    let currentElem;

    trace({
      type: "initRecursive",
      line: 8,
      environment: { result, startIndex, soFar }
    });

    trace({
      type: "compare",
      line: 9,
      environment: { result, startIndex, soFar }
    });

    if (soFar.length === B) {
      result.push(soFar.slice());

      trace({
        type: "AddToSolution",
        line: 10,
        environment: { result, startIndex, soFar }
      });

      trace({
        type: "returnRecursive",
        line: 11,
        environment: { result, startIndex: startIndex - 1, soFar }
      });

      return;
    }

    for (let i = startIndex; i < list.length; i += 1) {
      trace({
        type: "loop",
        line: 14,
        environment: { result, startIndex, soFar, i }
      });

      currentElem = list[i];

      trace({
        type: "assign",
        line: 15,
        environment: { result, startIndex, soFar, i, currentElem }
      });

      soFar.push(currentElem);

      trace({
        type: "assign",
        line: 16,
        environment: { result, startIndex, soFar, i, currentElem }
      });

      trace({
        type: "recurse",
        line: 17,
        environment: {
          result,
          startIndex,
          soFar,
          i,
          currentElem
        }
      });

      CombinationsRecurse(i + 1, soFar);

      trace({
        type: "recurseReturn",
        line: 17,
        environment: {
          result,
          startIndex,
          soFar,
          i,
          currentElem
        }
      });

      soFar.pop();

      trace({
        type: "pop",
        line: 18,
        environment: {
          result,
          startIndex,
          soFar,
          i,
          currentElem
        }
      });
    }
  };

  // Start Recursive Call
  CombinationsRecurse(0, []);

  trace({
    type: "returnRecursive",
    line: 22,
    environment: { A, B, result, list }
  });

  trace({
    type: "finishWrapper",
    line: 23,
    environment: { A, B, result, list }
  });

  return result;
};

export default CombinationsWrapper;
