import { useState } from 'react';
import Button from './Button';

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
    <>
      <h1>{counter}</h1>
      <Button onHandleFunc={handlePlusCounter}>Plus</Button>
      <Button onHandleFunc={handleMinusCounter}>Minus</Button>
      <Button onHandleFunc={handleReset}>Reset</Button>
    </>
  );
}
