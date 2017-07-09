import React from "react";

const ButtonDisplay = props => {
  const { stepIndex, stepLength, onPrevClick, onNextClick } = props;
  return (
    <div className="ButtonDisplay">
      <button
        onClick={onPrevClick}
        disabled={stepIndex <= 0}
        className="btn btn-primary"
      >
        Prev
      </button>
      <button
        onClick={onNextClick}
        disabled={stepIndex >= stepLength - 1}
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  );
};

export default ButtonDisplay;
