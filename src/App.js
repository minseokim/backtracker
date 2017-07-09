import React from "react";
import "./App.css";
import VisualizationDisplay from "./components/VisualizationDisplay";

const App = () => {
  return (
    <div className="App container columns center">
      <div className="column col-11 centered">
        <header className="navbar">
          <section className="navbar-section">
            <div className="">
              <h1>Backtracker </h1>
              <blockquote>
                <p>
                  To understand recursion, one must first understand recursion.{" "}
                </p>
                <cite>Stephen Hawking</cite>
              </blockquote>
            </div>
          </section>
          <section className="navbar-section">
            <ul className="menu">
              <li className="menu-item">
                <a href="#">Parentheses Generator</a>
              </li>
              <li className="menu-item">
                <a href="#">Rock, Paper, Scissors</a>
              </li>
              <li className="menu-item">
                <a href="#">Subsets</a>
              </li>
              <li className="menu-item">
                <a href="#">Permutations</a>
              </li>
              <li className="menu-item">
                <a href="#">Combinations</a>
              </li>
            </ul>
          </section>
        </header>
        <VisualizationDisplay />
      </div>
    </div>
  );
};

export default App;
