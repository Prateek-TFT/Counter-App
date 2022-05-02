import React, { useState } from "react";
import Counter from "./Counter";
import styles from "../styles/Wrapper.module.css";
export const Wrapper = () => {
  const [counterValue, setCounterValue] = useState(0); //counterValue state
  const [counterInputValue, setCounterInputValue] = useState(0); //Input-counter-value state
  const [showcounter, setShowCounter] = useState(true); //Toggling state for counter component
  const [startInterval, setStartInterval] = useState(null); //state for starting/stoping counter
  const onChangeHandler = (event) => {
    setCounterInputValue(Number(event.target.value));
  };
  //function to increase counter value.
  const run = () => {
    setCounterValue((prevstate) => prevstate + 1);
  };
  //function to start the counter.
  const startHandler = () => {
    setShowCounter(true);
    clearInterval(startInterval);
    setStartInterval(setInterval(run, 1000));
    setCounterValue(counterInputValue);
    setCounterInputValue(0);
  };
  //function to stop the counter.
  const stopHandler = () => {
    clearInterval(startInterval);
    setCounterInputValue(0);
  };
  //function to Remove Counter Component from DOM and clearing the counter value.
  const DeleteHandler = () => {
    setShowCounter(false);
    setCounterValue(0);
    setCounterInputValue(0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.displayDiv}>
          <h1 className={styles.h1}>Counter</h1>
          {showcounter && <Counter value={counterValue} />}
          {showcounter && (
            <input
              placeholder="Enter No..."
              type="number"
              onChange={onChangeHandler}
              value={counterInputValue !== 0 && counterInputValue}
            ></input>
          )}
        </div>
        <div className={styles.buttonDiv}>
          <button onClick={startHandler}>Start</button>
          <button onClick={stopHandler}>Stop</button>
          <button onClick={DeleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
};
