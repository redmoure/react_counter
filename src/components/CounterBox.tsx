import Button from './Button';
import styles from './CounterBox.module.css';

import { useState } from 'react';

export default function CounterBox() {
  const [counter, setCounter] = useState(0);

  function handlePlusCounter() {
    setCounter(() => counter + 1);
  }
  function handleMinusCounter() {
    setCounter(() => counter - 1);
  }
  function handleReset() {
    setCounter(() => 0);
  }

  return (
    <div className={styles.box}>
      <h1 className={styles.h1}>{counter}</h1>
      <div className={styles.buttonsBox}>
        <Button onHandleFunc={handlePlusCounter} color="green">
          Plus
        </Button>
        <Button onHandleFunc={handleMinusCounter} color="red">
          Minus
        </Button>
        <Button onHandleFunc={handleReset} color="grey">
          Reset
        </Button>
      </div>
    </div>
  );
}
