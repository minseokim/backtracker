import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import VisualizationDisplay from "./components/VisualizationDisplay";
import ParenthesesGenerator from "./Algorithms/ParenthesesGenerator";
import ParenthesesGeneratorSourceCode from "./Algorithms/ParenthesesGeneratorSourceCode";
import RockPaperScissorsSourceCode from "./Algorithms/RockPaperScissorsSourceCode";
import RockPaperScissors from "./Algorithms/RockPaperScissors";
import Permutations from "./Algorithms/Permutations";
import PermutationsSourceCode from "./Algorithms/PermutationsSourceCode";
import Subsets from "./Algorithms/Subsets";
import SubsetsSourceCode from "./Algorithms/SubsetsSourceCode";
import Combinations from "./Algorithms/Combinations";
import CombinationsSourceCode from "./Algorithms/CombinationsSourceCode";

const App = () => {
  return (
    <Router>
      <div className="App container columns center">
        <div className="column col-11 centered">
          <header className="navbar">
            <section className="navbar-section">
              <div className="">
                <h1>Backtracker </h1>
                <blockquote>
                  <p>
                    To understand recursion, one must first understand
                    recursion.{" "}
                  </p>
                  <cite>Stephen Hawking</cite>
                </blockquote>
              </div>
            </section>
            <section className="navbar-section">
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/parens">Parentheses Generator</Link>
                </li>
                <li className="menu-item">
                  <Link to="/rps">Rock, Paper, Scissors</Link>
                </li>
                <li className="menu-item">
                  <Link to="/subsets">Subsets</Link>
                </li>
                <li className="menu-item">
                  <Link to="/permutations">Permutations</Link>
                </li>
                <li className="menu-item">
                  <Link to="/combinations">Combinations</Link>
                </li>
              </ul>
            </section>
          </header>
          <Route exact path="/">
            <Redirect to="/parens" />
          </Route>
          <Route
            path="/parens"
            render={() =>
              <VisualizationDisplay
                sourceCode={ParenthesesGeneratorSourceCode}
                wrapper={ParenthesesGenerator}
                args={2}
              />}
          />
          <Route
            path="/rps"
            render={() =>
              <VisualizationDisplay
                sourceCode={RockPaperScissorsSourceCode}
                wrapper={RockPaperScissors}
                args={2}
              />}
          />
          <Route
            path="/subsets"
            render={() =>
              <VisualizationDisplay
                sourceCode={SubsetsSourceCode}
                wrapper={Subsets}
                args={[1, 2, 3]}
              />}
          />
          <Route
            path="/permutations"
            render={() =>
              <VisualizationDisplay
                sourceCode={PermutationsSourceCode}
                wrapper={Permutations}
                args={[1, 2, 3]}
              />}
          />
          <Route
            path="/combinations"
            render={() =>
              <VisualizationDisplay
                sourceCode={CombinationsSourceCode}
                wrapper={Combinations}
                args={{ A: 4, B: 2 }}
              />}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
