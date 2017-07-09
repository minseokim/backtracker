import React from "react";

const CodeDisplay = props => {
  const { sourceCode, line } = props;

  return (
    <div className="CodeDisplay">
      <pre className="CodeDisplay__pre prettyprint lang-javascript">
        <ol>
          {sourceCode.split("\n").map((fnLine, index) => {
            return (
              <li
                key={index}
                style={{
                  backgroundColor: index === line ? "#ffb700" : "white"
                }}
              >
                {fnLine}
              </li>
            );
          })}
        </ol>
      </pre>
    </div>
  );
};

export default CodeDisplay;
