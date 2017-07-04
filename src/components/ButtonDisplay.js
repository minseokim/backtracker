import React from 'react';

const ButtonDisplay = (props) => {

  const { stepIndex, stepLength, onPrevClick, onNextClick } = props;

  return (
    <div className="ButtonDisplay">
      <button
        onClick={onPrevClick}
        disabled={stepIndex <= 0}
      >
        Prev
      </button>
      <button
        onClick={onNextClick}
        disabled={stepIndex >= stepLength-1}
      >
        Next
      </button>
    </div>
  );
};

export default ButtonDisplay;