import React from 'react';

const ButtonDisplay = (props) => {

  return (
    <div className="ButtonDisplay">
      <button
        onClick={props.onPrevClick}
      >
        Prev
      </button>
      <button
        onClick={props.onNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default ButtonDisplay;