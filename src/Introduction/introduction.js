import React from 'react'

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

  render() {
    let localTime = null;

    if (this.state.actualDateClicked) {
      localTime = <h2>You clicked at {this.state.actualDateClicked}</h2>;
    }

    return (
        <div>
          <h1>Hi {this.props.userName}</h1>
          {localTime}
          <button onClick={() => this.dateClicked()}> Click here</button>
        </div>
    )
  }
};