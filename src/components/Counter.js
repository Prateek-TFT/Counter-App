import React from "react";
import styles from "../styles/Counter.module.css";

export const Counter = (props) => {
  //Getting countervalue as a prop from Wrapper component
  return <h1 className={styles.counter}>{props.value}</h1>;
};

export default Counter;
