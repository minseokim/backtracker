import React from 'React';

const ButtonDisplay = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.onPrevClick(props.currentStepIndex);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          props.onNextClick(props.currentStepIndex);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ButtonDisplay;