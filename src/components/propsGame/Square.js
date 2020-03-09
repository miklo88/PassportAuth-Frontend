import React from "react";

function Square(props) {
  return (
    <button
      className='square'
      // onClick es6 arrow function so the 'alert' fires off only when clicked.
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
