import React from "react";

const EnvironmentDisplay = (props) => {
  const step = props.step;
  console.log('step :', step);
  return (
    <div>
      {step.map((currentEnv) => {
        return (
          <div key={JSON.stringify(currentEnv)}>
            {Object.keys(currentEnv).map((key) => {
              return (
                <div key={key}>
                  {key} = {JSON.stringify(currentEnv[key])}

                </div>
              )
            })}
          <hr />
        </div>
        );
      })}
    </div>
  );
};

export default EnvironmentDisplay;