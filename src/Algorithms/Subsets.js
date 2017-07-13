import { trace } from "./../trace";

const SubsetsWrapper = function SubsetsWrapper(nums) {
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

  const SubsetsRecurse = function SubsetsRecurse(startIndex, subset) {
    trace(
      {
        type: "initRecursive",
        line: 3,
        environment: { result, startIndex, subset }
      },
      steps
    );
    let currentElementToSelect;
    // push to solution
    result.push(subset.slice());

    trace(
      {
        type: "AddToSolution",
        line: 4,
        environment: { result, startIndex, subset }
      },
      steps
    );

    let i = startIndex;
    trace(
      {
        type: "loop",
        line: 6,
        environment: { result, startIndex, subset, i, startIndex }
      },
      steps
    );

    for (i = startIndex; i < nums.length; i++) {
      currentElementToSelect = nums[i];
      trace(
        {
          type: "assign",
          line: 7,
          environment: { result, startIndex, subset, i, currentElementToSelect }
        },
        steps
      );

      subset.push(currentElementToSelect);

      trace(
        {
          type: "push",
          line: 8,
          environment: { result, startIndex, subset, i, currentElementToSelect }
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
            subset,
            i,
            currentElementToSelect
          }
        },
        steps
      );
      SubsetsRecurse(i + 1, subset);

      subset.pop();

      trace(
        {
          type: "pop",
          line: 10,
          environment: {
            result,
            startIndex,
            subset,
            i,
            currentElementToSelect
          }
        },
        steps
      );
    }

    trace(
      {
        type: "returnRecursive",
        line: 9,
        environment: {
          result,
          startIndex: startIndex - 1,
          subset,
          currentElementToSelect
        }
      },
      steps
    );
  };

  // Start Recursive Call
  SubsetsRecurse(0, []);

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
      line: 15,
      environment: { nums, result }
    },
    steps
  );

  return steps;
};

export default SubsetsWrapper;
