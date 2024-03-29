import React from "react";
import "./Token.css";
import { login, refreshToken } from "../utils";
class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 600 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }
  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
      refreshToken();
      window.location.reload(true);
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="H1"> Dashboard</h1>
            <div className="line"></div>
          </div>
          <div className="row">
            <div className="col-md-12  token">
              <div className="card ">
                <div className="card-body commonCard">
                  <h5 className="card-title">
                    <b>Token Remaining Time</b>
                  </h5>
                  <p className="card-text">
                    min: {this.state.time.m} sec: {this.state.time.s}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Timer;
