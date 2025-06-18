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
      <h1>{counter}</h1>
      <Button onHandleFunc={handlePlusCounter}>Plus</Button>
      <Button onHandleFunc={handleMinusCounter}>Minus</Button>
      <Button onHandleFunc={handleReset}>Reset</Button>
    </div>
  );
}
