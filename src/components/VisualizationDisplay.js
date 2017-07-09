import React, { Component } from "react";
import EnvironmentDisplay from "./EnvironmentDisplay";
import CodeDisplay from "./CodeDisplay";
import ButtonDisplay from "./ButtonDisplay";
import { steps } from "./../trace";
import ParenthesesGenerator from "./../Algorithms/ParenthesesGenerator";
import ParenthesesGeneratorSourceCode from "./../Algorithms/ParenthesesGeneratorSourceCode";
import RockPaperScissorsSourceCode from "./../Algorithms/RockPaperScissorsSourceCode";
import RockPaperScissors from "./../Algorithms/RockPaperScissors";
import Permutations from "./../Algorithms/Permutations";
import PermutationsSourceCode from "./../Algorithms/PermutationsSourceCode";

// ParenthesesGenerator(2);
// RockPaperScissors(2);
Permutations([1, 2]);

class VisualizationDisplay extends Component {
  constructor() {
    super();
    this.state = {
      steps,
      currentStepIndex: 0
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  componentWillMount() {
    window.addEventListener("keyup", this.handleKeyUp);
  }
  handleKeyUp(e) {
    if (e.key === "ArrowRight") {
      this.handleNextClick();
    } else if (e.key === "ArrowLeft") {
      this.handlePrevClick();
    }
  }
  handlePrevClick() {
    if (this.state.currentStepIndex > 0) {
      this.setState(prevState => {
        return {
          currentStepIndex: prevState.currentStepIndex - 1
        };
      });
    }
  }

  handleNextClick() {
    if (this.state.currentStepIndex < this.state.steps.length - 1) {
      this.setState(prevState => {
        return {
          currentStepIndex: prevState.currentStepIndex + 1
        };
      });
    }
  }
  render() {
    return (
      <div className="VisualizationDisplay container">
        <ButtonDisplay
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
          stepIndex={this.state.currentStepIndex}
          stepLength={this.state.steps.length}
        />
        <div className="columns">
          <div className="column col-9">
            <CodeDisplay
              line={this.state.steps[this.state.currentStepIndex].line}
              sourceCode={PermutationsSourceCode}
            />
          </div>
          <div className="column col-3">
            <EnvironmentDisplay
              context={
                this.state.steps[this.state.currentStepIndex].environment
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VisualizationDisplay;
