import { trace } from "./../trace";

const swap = function swap(list, a, b) {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const PermutationsWrapper = function PermutationsWrapper(nums) {
  trace({
    type: "initWrapper",
    line: 0,
    environment: { nums }
  });

  const result = [];

  trace({
    type: "assign",
    line: 1,
    environment: { nums, result }
  });

  // invoke recursive function
  trace({
    type: "firstRecursiveCall",
    line: 14,
    environment: { nums, result }
  });

  const PermutationsRecurse = function PermutationsRecurse(startIndex, input) {
    trace({
      type: "initRecursive",
      line: 3,
      environment: { result, startIndex, input }
    });

    trace({
      type: "compare",
      line: 4,
      environment: { result, startIndex, input }
    });

    // We've reached base case
    if (startIndex === input.length) {
      // push to solution
      result.push(input.slice());

      trace({
        type: "AddToSolution",
        line: 5,
        environment: { result, startIndex, input }
      });

      trace({
        type: "returnRecursive",
        line: 9,
        environment: { result, startIndex, input }
      });
    } else {
      for (let i = startIndex; i < input.length; i++) {
        trace({
          type: "loop",
          line: 7,
          environment: { result, startIndex, input, i }
        });

        swap(input, startIndex, i);

        trace({
          type: "swap",
          line: 8,
          environment: { result, startIndex, input, i }
        });

        trace({
          type: "recurse",
          line: 9,
          environment: {
            result,
            startIndex,
            input,
            i
          }
        });

        PermutationsRecurse(startIndex + 1, input);

        swap(input, startIndex, i);

        trace({
          type: "swapBack",
          line: 10,
          environment: { result, startIndex, input, i }
        });
      } // for loop ends
      trace({
        type: "returnRecursive",
        line: 9,
        environment: { result, startIndex, input }
      });
    }
  };

  // Start Recursive Call
  PermutationsRecurse(0, nums);

  trace({
    type: "returnRecursive",
    line: 14,
    environment: { nums, result }
  });

  trace({
    type: "finishWrapper",
    line: 16,
    environment: { nums, result }
  });
};

export default PermutationsWrapper;
