import React from "react";
import ParenthesesGeneratorDisplay from "./components/ParenthesesGeneratorDisplay";

const App = () => {
  return (
    <div className="App">
      <h1>Backtracker </h1>
      <blockquote>
        <p>To understand recursion, one must first understand recursion. </p>
        <cite>Stephen Hawking</cite>
      </blockquote>
      <ParenthesesGeneratorDisplay />
    </div>
  );
};

export default App;
