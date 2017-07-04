import React from "react";

const EnvironmentDisplay = (props) => {
  const context = props.context;
  console.log('context :', context);
  window.context = context;
  return (
    <div>
      {context.map((currentEnv) => {
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