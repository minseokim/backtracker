/*
  Trace snapshots each step of function
    Types of events :
      - initWrapper
      - initRecursive
      - compare
      - assign
      - AddToSolution
      - returnRecursive(returning from Recursive function)
      - return(just return any value)
      - finishWrapper
      - invokeFirstRecursiveCall
      - recurse
*/

/*
Each Step keeps track of :
  1. callStackDepth
  2. CurrentLine
  3. Type
  4. Execution Context
      - Variables(Result, soFar, open, closed)
*/

const steps = [];
let callStackDepth = 0;

const deepCopy = obj => {
  return JSON.parse(JSON.stringify(obj));
};

const trace = step => {
  const type = step.type;
  let currentEnvironment = [step.environment];
  let prevEnvironment;
  let prevStep;

  // Deep copy previous environment first
  if (steps.length > 0) {
    prevStep = steps[steps.length - 1];
    prevEnvironment = deepCopy(prevStep.environment);
  }

  // need to create copy of step's result variable
  if (step.environment.result) {
    step.environment.result = step.environment.result.slice();
  }

  if (type === "initRecursive") {
    callStackDepth += 1;
    // Concat currentEnvironment to previous environment to create stacks of recursive environments
    currentEnvironment = prevEnvironment.concat(currentEnvironment);
  }

  if (callStackDepth > 0 && type === "returnRecursive") {
    callStackDepth -= 1;
    // Remove the last added call stack when returning from recursion
    prevEnvironment.pop();
    currentEnvironment = prevEnvironment;
  }

  // If we're in the middle of recursion, just swap the last stack current environment with current environment(Preserves call stack depth, but updates environment)
  if (callStackDepth > 0 && type !== "initRecursive") {
    prevEnvironment[prevEnvironment.length - 1] = step.environment;
    currentEnvironment = prevEnvironment;
  }

  const newStep = { callStackDepth };

  for (let key in step) {
    if (key === "environment") {
      newStep[key] = currentEnvironment;
    } else {
      newStep[key] = step[key];
    }
  }

  steps.push(newStep);

  return currentEnvironment;
};

export { steps, trace };
