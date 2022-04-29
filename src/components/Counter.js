import React, { Component } from "react";
import styles from "../styles/Counter.module.css";
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.counterValue !== props.value) {
      return {
        counterValue: props.value,
      };
    }
    return null;
  }

  render() {
    return <h1 className={styles.counter}>{this.state.counterValue}</h1>;
  }
}

export default Counter;
