import React from "react"
import PropTypes from 'prop-types';

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

ActiveButtons.propTypes = {
  onClickSubmit: PropTypes.func,
  onClickReset: PropTypes.func,
};

export default ActiveButtons;