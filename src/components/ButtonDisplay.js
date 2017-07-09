import React from "react";

const ButtonDisplay = props => {
  const { stepIndex, stepLength, onPrevClick, onNextClick } = props;
  return (
    <div className="ButtonDisplay">
      <button
        onClick={onPrevClick}
        disabled={stepIndex <= 0}
        className="btn ButtonDisplay__prev"
      >
        Prev
      </button>
      <button
        onClick={onNextClick}
        disabled={stepIndex >= stepLength - 1}
        className="btn ButtonDisplay__next"
      >
        Next
      </button>
      <span className="ButtonDisplay__label label">
        Click or use left/right on keyboard to navigate
      </span>
    </div>
  );
};

export default ButtonDisplay;
