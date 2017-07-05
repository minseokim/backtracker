import React, { Component } from "react";
import EnvironmentDisplay from "./EnvironmentDisplay";
import CodeDisplay from "./CodeDisplay";
import ButtonDisplay from "./ButtonDisplay";
import { steps } from "./../trace";
import ParenthesesGenerator from "./../Algorithms/ParenthesesGenerator";
import ParenthesesGeneratorSourceCode from "./../Algorithms/ParenthesesGeneratorSourceCode";

ParenthesesGenerator(1);

class ParenthesesGeneratorDisplay extends Component {
  constructor() {
    super();
    this.state = {
      steps,
      currentStepIndex: 0
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handlePrevClick() {
    this.setState(prevState => {
      return {
        currentStepIndex: prevState.currentStepIndex - 1
      };
    });
  }

  handleNextClick() {
    this.setState(prevState => {
      return {
        currentStepIndex: prevState.currentStepIndex + 1
      };
    });
  }
  render() {
    return (
      <div className="ParenthesesGeneratorDisplay">
        <div>
          <ButtonDisplay
            onPrevClick={this.handlePrevClick}
            onNextClick={this.handleNextClick}
            stepIndex={this.state.currentStepIndex}
            stepLength={this.state.steps.length}
          />
          <CodeDisplay
            line={this.state.steps[this.state.currentStepIndex].line}
            sourceCode={ParenthesesGeneratorSourceCode}
          />
          <EnvironmentDisplay
            context={this.state.steps[this.state.currentStepIndex].environment}
          />
        </div>
      </div>
    );
  }
}

export default ParenthesesGeneratorDisplay;
