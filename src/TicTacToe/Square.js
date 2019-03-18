import React from 'react';

export const Square = (props) => {
  
  return (
      <button className={`square ${props.won ? "won" : ""}`} onClick={props.onClick} disabled={props.isDisabled}>
        {props.value}
      </button>
  );
};