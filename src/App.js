import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const steps = [];
let callStackDepth = 0;

/* Each Step keeps track of :
  1. callStackDepth
  2. CurrentLine
  3. Type
  4. Execution Context
      - Variables(Result, soFar, open, closed)

  Trace function trace each step of function
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
const trace = function(step) {
  const type = step.type;
  let currentEnvironment = step.environment;

  if (type === 'initRecursive') {
    callStackDepth++;
  }

  if (type === 'returnRecursive') {
    callStackDepth--;
  }

  //need to create copy of step's result variable
  if (step.environment.result) {
    step.environment.result = step.environment.result.slice();
  }

  let newStep = { callStackDepth };
  for (let key in step) {
    newStep[key] = step[key];
  }
  steps.push(newStep);
  return currentEnvironment
}

const parenthesesGeneratorWrapper = function(n) {
  trace({
    type: 'initWrapper',
    line: 0,
    environment: { n },
  });

  let result = [];

  trace({
    type: 'assign',
    line : 1,
    environment: { n, result },
  });

  let soFar = '';
  let open = 0;
  let closed = 0;
  let max = n;

  //invoke recursive function
  trace({
    type : 'firstRecursiveCall',
    line : 20,
    environment: { n, result, soFar, open, closed, max},
  });

  parenthesesGeneratorRecurse(soFar, open, closed, max, result, 0);

  trace({
    type : 'returnRecursive',
    line : 20,
    environment: { n, result, soFar, open, closed, max},
  });

  trace({
    type : 'finishWrapper',
    line : 21,
    environment: { n, result, soFar, open, closed, max},
  });
  return;
};

const parenthesesGeneratorRecurse = function(soFar, open, closed, max, result) {

  trace({
    type : 'initRecursive',
    line : 4,
    environment : {result : result, soFar, open, closed, max},
  });

  //We've reached base case
  if (trace({
      type : 'compare',
      line : 6,
      environment : {result, soFar, open, closed, max},
    }) && (soFar.length === max * 2)) {

    //push to solution
    result.push(soFar);

    trace({
      type : 'AddToSolution',
      line : 7,
      environment : {result, soFar, open, closed, max},
    });

    trace({
      type : 'return',
      line : 8,
      environment : {result, soFar, open, closed, max},
    });
    return;
  }

  //Case 2 : Open < Max, Recurse Again with '('
  if (trace({
    type : 'compare',
    line : 11,
    environment : {result, soFar, open, closed, max}
  }) && (open < max)) {

    //start another recursive call
    trace({
      type : 'recurse',
      line : 12,
      environment : {result, soFar, open, closed, max}
    });
    parenthesesGeneratorRecurse(soFar + '(', open+1, closed, max, result);

    //add returnRecursive after recursive call completes
    trace({
      type : 'returnRecursive',
      line : 12,
      environment : {result, soFar, open, closed, max}
    });
  }

  //Case 3 : Closed < Open, Recurse Again with ')'
  if (trace({
    type : 'compare',
    line : 15,
    environment : {result, soFar, open, closed, max}
  }) && (closed < open)) {

    //start another recursive call
    trace({
      type : 'recurse',
      line : 16,
      environment : {result, soFar, open, closed, max}
    });
    parenthesesGeneratorRecurse(soFar + ')', open, closed+1, max, result);

    //add returnRecursive after recursive call completes
    trace({
      type : 'returnRecursive',
      line : 16,
      environment : {result, soFar, open, closed, max}
    });
  }
};

parenthesesGeneratorWrapper(1);

const Environment = (props) => {

  return (
    <div>
      {Object.keys(props.environment).map((key) => {
        return (
          <div key={key}>
            {key} = {JSON.stringify(props.environment[key])}
          </div>
        )
      })}
    </div>
  )
};


class App extends Component {

  render() {
    const currentStepIndex = 0;
    const step = steps[currentStepIndex];
    const currentEnvironment = step.environment;

    return (
      <div className="App">
        <div>
          <Environment
            environment={currentEnvironment}
          />
        </div>
      </div>
    );
  }
}

export default App;
