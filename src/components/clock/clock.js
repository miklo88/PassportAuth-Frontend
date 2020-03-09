import React from "react";
import AxiosHook from "../../axios";

import "./clock.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className='Clock-Container'>
        <p className='P-Title'>{this.state.date.toLocaleTimeString()}</p>
        <AxiosHook />
      </div>
    );
  }
}
export default Clock;
