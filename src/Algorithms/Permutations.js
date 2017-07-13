import { trace } from "./../trace";

const swap = function swap(list, a, b) {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const PermutationsWrapper = function PermutationsWrapper(nums) {
  const steps = [];
  trace(
    {
      type: "initWrapper",
      line: 0,
      environment: { nums }
    },
    steps
  );

  const result = [];

  trace(
    {
      type: "assign",
      line: 1,
      environment: { nums, result }
    },
    steps
  );

  // invoke recursive function
  trace(
    {
      type: "firstRecursiveCall",
      line: 14,
      environment: { nums, result }
    },
    steps
  );

  const PermutationsRecurse = function PermutationsRecurse(startIndex, input) {
    trace(
      {
        type: "initRecursive",
        line: 3,
        environment: { result, startIndex, input }
      },
      steps
    );

    trace(
      {
        type: "compare",
        line: 4,
        environment: { result, startIndex, input }
      },
      steps
    );

    // We've reached base case
    if (startIndex === input.length) {
      // push to solution
      result.push(input.slice());

      trace(
        {
          type: "AddToSolution",
          line: 5,
          environment: { result, startIndex, input }
        },
        steps
      );

      trace(
        {
          type: "returnRecursive",
          line: 9,
          environment: { result, startIndex, input }
        },
        steps
      );
    } else {
      for (let i = startIndex; i < input.length; i++) {
        trace(
          {
            type: "loop",
            line: 7,
            environment: { result, startIndex, input, i }
          },
          steps
        );

        swap(input, startIndex, i);

        trace(
          {
            type: "swap",
            line: 8,
            environment: { result, startIndex, input, i }
          },
          steps
        );

        trace(
          {
            type: "recurse",
            line: 9,
            environment: {
              result,
              startIndex,
              input,
              i
            }
          },
          steps
        );

        PermutationsRecurse(startIndex + 1, input);

        swap(input, startIndex, i);

        trace(
          {
            type: "swapBack",
            line: 10,
            environment: { result, startIndex, input, i }
          },
          steps
        );
      } // for loop ends
      trace(
        {
          type: "returnRecursive",
          line: 9,
          environment: { result, startIndex, input }
        },
        steps
      );
    }
  };

  // Start Recursive Call
  PermutationsRecurse(0, nums);

  trace(
    {
      type: "returnRecursive",
      line: 14,
      environment: { nums, result }
    },
    steps
  );

  trace(
    {
      type: "finishWrapper",
      line: 16,
      environment: { nums, result }
    },
    steps
  );

  return steps;
};

export default PermutationsWrapper;
