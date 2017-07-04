import React from "react";

const CodeDisplay = (props) => {
  console.log('codeDisplay Props :', props);
  props.sourceCode.split('\n').map((line) => {
    console.log(line);
  })
  return (
    <div>
      Insert Code Block Here
    </div>
  );
};

export default CodeDisplay;