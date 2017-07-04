import React from "react";

const CodeDisplay = (props) => {
  console.log('codeDisplay Props :', props);
  return (
    <div>
      <pre>
        <ol>
          {props.sourceCode.split('\n').map((fnLine, index) => {
            return (
              <li
                key={index}
                style={ {backgroundColor : index === props.line ? 'orange' : 'white'}}
              >
                {fnLine}
              </li>
            )

          })}
        </ol>
      </pre>
    </div>
  );
};

export default CodeDisplay;