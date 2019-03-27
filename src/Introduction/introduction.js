import React from 'react'
import './styles/introduction.scss'

import NameForm from "./NameForm";

const ActiveButtons = React.lazy(() => import('./ActiveButtons'));
const Clock = React.lazy(() => import('./Clock'));

export class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Stranger',
      actualDateClicked: [],
      resetActivated: false,
      activeClockMenu: false,
      activeInput: true
    }
  }

  dateClicked = () => {
    this.setState(prev => ({
      actualDateClicked: [...prev.actualDateClicked, '|' + new Date().toLocaleTimeString()],
      resetActivated: true
    }))
  };

  resetDate = () => {
    this.setState({actualDateClicked: '', resetActivated: false})
  };

  sendName = e => {
    e.preventDefault();
    this.setState({name: e.target.getAttribute('data-value'), activeClockMenu: true, activeInput: false})
  };

  resetForm = () => {
    this.setState({activeClockMenu: false, activeInput: true})
  };

  render() {

    const localTime = <h2>You clicked at {this.state.actualDateClicked}</h2>;

    return (
        <div>
          <h1>Clock Section </h1>
          <div className={'introduction'}>
            {this.state.activeInput && <NameForm onClick={this.sendName}/>}
            {this.state.activeClockMenu && <div>
              <button onClick={this.resetForm} className={'buttons'}>Change your name</button>
              <h1>Hi {this.state.name}</h1>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Clock/>
                {this.state.actualDateClicked.length > 0 && localTime}
                <ActiveButtons
                    resetActivated={this.state.resetActivated}
                    onClickSubmit={this.dateClicked}
                    onClickReset={this.resetDate}
                />
              </React.Suspense>
            </div>}
          </div>
        </div>
    )
  }
}