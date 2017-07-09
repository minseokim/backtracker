import React from "react";

const CodeDisplay = props => {
  const { sourceCode, line } = props;

  return (
    <div className="CodeDisplay">
      <pre className="CodeDisplay__pre code" data-lang="javascript">
        <ol>
          {sourceCode.split("\n").map((fnLine, index) => {
            return (
              <li
                key={index}
                style={{
                  backgroundColor: index === line ? "#e9825b" : "#D8E8F8"
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
