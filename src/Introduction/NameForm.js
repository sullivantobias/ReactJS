import React from 'react';
import PropTypes from 'prop-types';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <input placeholder={'tell me your name'} type="text" value={this.state.value}
               onChange={this.handleChange}/>
        <button className={'buttons'} data-value={this.state.value} onClick={this.props.onClick}>Send</button>
      </div>
    );
  }
}

/** Proptypes **/
NameForm.propTypes = {
  onClick: PropTypes.func,
};

export default NameForm;