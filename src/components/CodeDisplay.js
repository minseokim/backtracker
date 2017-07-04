import React from "react";

const CodeDisplay = props => {
  const { sourceCode, line } = props;

  return (
    <div className="CodeDisplay">
      <pre className="CodeDisplay__pre">
        <ol>
          {sourceCode.split("\n").map((fnLine, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: index === line ? "orange" : "white" }}
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
