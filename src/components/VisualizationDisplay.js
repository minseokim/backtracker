import React, { Component } from "react";
import EnvironmentDisplay from "./EnvironmentDisplay";
import CodeDisplay from "./CodeDisplay";
import ButtonDisplay from "./ButtonDisplay";
import { steps } from "./../trace";

class VisualizationDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps,
      currentStepIndex: 0
    };
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  componentWillMount() {
    this.props.wrapper(this.props.args);
  }
  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp);
  }
  componentWillReceiveProps(nextProps) {
    console.log("NextProps :", nextProps);
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
        <div className="columns">
          <div className="column col-8 col-lg-12">
            <ButtonDisplay
              onPrevClick={this.handlePrevClick}
              onNextClick={this.handleNextClick}
              stepIndex={this.state.currentStepIndex}
              stepLength={this.state.steps.length}
            />
            <CodeDisplay
              line={this.state.steps[this.state.currentStepIndex].line}
              sourceCode={this.props.sourceCode}
            />
          </div>
          <div className="column col-4 col-lg-12">
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
