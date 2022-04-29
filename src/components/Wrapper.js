import React, { Component } from "react";
import Counter from "./Counter";
import styles from "../styles/Wrapper.module.css";
export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
      showWelcome: true,
      counterinputValue: 0,
      counterValue: 0,
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
  doIntervalChange = () => {
    this.setState({
      showCounter: true,
    });
    this.myInterval = setInterval(() => {
      this.setState((prevstate) => ({
        counterValue: prevstate.counterValue + 1,
      }));
    }, 1000);
  };
  startHandler = () => {
    this.setState({ counterValue: this.state.counterinputValue });
    clearInterval(this.myInterval);
    this.doIntervalChange();
  };
  DeleteHandler = () => {
    clearInterval(this.myInterval);
    this.setState({ showCounter: false, counterinputValue: 0 });
  };
  stopHandler = () => {
    clearInterval(this.myInterval);
    this.setState({ counterinputValue: 0 });
  };
  onchangeHandler = (e) => {
    this.setState({ counterinputValue: Number(e.target.value) });
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
                ></input>
              )}
            </div>
          )}
          {!this.state.showWelcome && (
            <div className={styles.buttonDiv}>
              <button onClick={this.startHandler}>Start</button>
              <button onClick={this.stopHandler}>Stop</button>
              <button onClick={this.DeleteHandler}>Delete</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Wrapper;
