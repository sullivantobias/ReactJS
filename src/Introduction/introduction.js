import React from 'react'

import {ActiveButtons} from "./ActiveButtons";

export class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualDateClicked: ''
    }
  }

  dateClicked() {
    this.setState({actualDateClicked: new Date().toLocaleTimeString()})
  }

  resetDate() {
    this.setState({actualDateClicked: ''})
  }

  render() {
    let localTime = null;

    if (this.state.actualDateClicked) {
      localTime = <h2>You clicked at {this.state.actualDateClicked}</h2>;
    }

    return (
        <div>
          <h1>Hi {this.props.userName}</h1>
          {localTime}
          <ActiveButtons
            onClickSubmit={() => this.dateClicked()}
            onClickReset={() => this.resetDate()}
          />
        </div>
    )
  }
}