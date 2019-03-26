import React from "react";

export const ActiveButtons = (props) => {
  return (
    <div>
      <button onClick={props.onClickSubmit}> Click here</button>
      <button onClick={props.onClickReset}> Reset</button>
    </div>
  )
};