import React from "react";
import VisualizationDisplay from "./components/VisualizationDisplay";

const App = () => {
  return (
    <div className="App">
      <h1>Backtracker </h1>
      <blockquote>
        <p>To understand recursion, one must first understand recursion. </p>
        <cite>Stephen Hawking</cite>
      </blockquote>
      <VisualizationDisplay />
    </div>
  );
};

export default App;
