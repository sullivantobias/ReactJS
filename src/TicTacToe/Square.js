import React from 'react';
import PropTypes from 'prop-types';

export const Square = (props) => {
  return (
    <button className={`square ${props.won ? "won" : ""}`} onClick={props.onClick} disabled={props.isDisabled}>
      {props.value}
    </button>
  );
};

/** Proptypes **/
Square.propTypes = {
  won: PropTypes.bool,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  value: PropTypes.string
};