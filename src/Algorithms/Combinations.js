import { trace } from "./../trace";

const CombinationsWrapper = function CombinationsWrapper({ A, B }) {
  const steps = [];
  trace(
    {
      type: "initWrapper",
      line: 0,
      environment: { A, B }
    },
    steps
  );

  const result = [];
  trace(
    {
      type: "assign",
      line: 1,
      environment: { A, B, result }
    },
    steps
  );

  const list = [];
  trace(
    {
      type: "assign",
      line: 3,
      environment: { A, B, result, list }
    },
    steps
  );
  for (let i = 1; i <= A; i += 1) {
    trace(
      {
        type: "loop",
        line: 4,
        environment: { A, B, result, list, i }
      },
      steps
    );
    list.push(i);
    trace(
      {
        type: "push",
        line: 5,
        environment: { A, B, result, list, i }
      },
      steps
    );
  }

  // invoke recursive function
  trace(
    {
      type: "firstRecursiveCall",
      line: 21,
      environment: { A, B, result }
    },
    steps
  );

  const CombinationsRecurse = function CombinationsRecurse(startIndex, soFar) {
    let currentElem;

    trace(
      {
        type: "initRecursive",
        line: 8,
        environment: { result, startIndex, soFar }
      },
      steps
    );

    trace(
      {
        type: "compare",
        line: 9,
        environment: { result, startIndex, soFar }
      },
      steps
    );

    if (soFar.length === B) {
      result.push(soFar.slice());

      trace(
        {
          type: "AddToSolution",
          line: 10,
          environment: { result, startIndex, soFar }
        },
        steps
      );

      trace(
        {
          type: "returnRecursive",
          line: 11,
          environment: { result, startIndex: startIndex - 1, soFar }
        },
        steps
      );

      return;
    }

    for (let i = startIndex; i < list.length; i += 1) {
      trace(
        {
          type: "loop",
          line: 14,
          environment: { result, startIndex, soFar, i }
        },
        steps
      );

      currentElem = list[i];

      trace(
        {
          type: "assign",
          line: 15,
          environment: { result, startIndex, soFar, i, currentElem }
        },
        steps
      );

      soFar.push(currentElem);

      trace(
        {
          type: "assign",
          line: 16,
          environment: { result, startIndex, soFar, i, currentElem }
        },
        steps
      );

      trace(
        {
          type: "recurse",
          line: 17,
          environment: {
            result,
            startIndex,
            soFar,
            i,
            currentElem
          }
        },
        steps
      );

      CombinationsRecurse(i + 1, soFar);

      // trace({
      //   type: "recurseReturn",
      //   line: 17,
      //   environment: {
      //     result,
      //     startIndex,
      //     soFar,
      //     i,
      //     currentElem
      //   }
      // });

      soFar.pop();

      trace(
        {
          type: "pop",
          line: 18,
          environment: {
            result,
            startIndex,
            soFar,
            i,
            currentElem
          }
        },
        steps
      );
    }
    trace(
      {
        type: "returnRecursive",
        line: 17,
        environment: {
          result,
          startIndex,
          soFar,
          currentElem
        }
      },
      steps
    );
  };

  // Start Recursive Call
  CombinationsRecurse(0, []);

  trace(
    {
      type: "returnRecursive",
      line: 22,
      environment: { A, B, result, list }
    },
    steps
  );

  trace(
    {
      type: "finishWrapper",
      line: 23,
      environment: { A, B, result, list }
    },
    steps
  );

  return steps;
};

export default CombinationsWrapper;
