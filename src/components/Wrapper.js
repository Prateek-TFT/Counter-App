import React, { Component } from "react";
import Counter from "./Counter";
import styles from "../styles/Wrapper.module.css";
export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
      showWelcome: true,
      startTimer: false,
      startFrom: "",
      counterValue: 0,
      counterTimer: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showWelcome: false });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.startTimer !== this.state.startTimer) {
      if (this.state.counterTimer) {
        clearInterval(this.state.counterTimer);
      }
      if (this.state.startTimer) {
        this.setState({
          counterTimer: setInterval(this.increaseCounter, 1000),
        });
      }
    }
  }
  increaseCounter = () => {
    this.setState((prevState) => ({
      counterValue: prevState.counterValue + 1,
    }));
  };
  startButtonHandler = () => {
    this.setState({
      counterValue: Number(this.state.startFrom),
      startTimer: true,
      showCounter: true,
      startFrom: "",
    });
  };
  deleteButtonHandler = () => {
    this.setState({
      counterValue: 0,
      startTimer: false,
      showCounter: false,
      startFrom: "",
    });
  };
  stopButtonHandler = () => {
    this.setState({ startTimer: false, startFrom: "" });
  };
  onchangeHandler = (e) => {
    this.setState({ startFrom: Number(e.target.value) });
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          {this.state.showWelcome ? (
            <h1 className={styles.h1}>Welcome to Counter App</h1>
          ) : (
            <div className={styles.displayDiv}>
              <h1 className={styles.h1}>Counter</h1>
              {this.state.showCounter && (
                <Counter value={this.state.counterValue} />
              )}
              {this.state.showCounter && (
                <input
                  placeholder="Enter No..."
                  type="number"
                  onChange={this.onchangeHandler}
                  value={this.state.startFrom}
                />
              )}
            </div>
          )}
          {!this.state.showWelcome && (
            <div className={styles.buttonDiv}>
              <button onClick={this.startButtonHandler}>Start</button>
              <button onClick={this.stopButtonHandler}>Stop</button>
              <button onClick={this.deleteButtonHandler}>Delete</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Wrapper;
