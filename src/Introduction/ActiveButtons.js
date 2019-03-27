import React from "react";

const ActiveButtons = (props) => {

  if (props.resetActivated) {
    return (
        <div>
          <button className={'buttons'} onClick={props.onClickSubmit}> Click here</button>
          <button className={'buttons'} onClick={props.onClickReset}> Reset</button>
        </div>
    )
  } else {
    return (
        <div>
          <button className={'buttons'} onClick={props.onClickSubmit}> Click here</button>
        </div>
    )
  }

};

export default ActiveButtons;