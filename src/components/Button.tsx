import styles from './Button.module.css';

import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onHandleFunc: () => void;
  color: 'red' | 'grey' | 'green';
};

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onHandleFunc} className={styles[props.color]}>
      {props.children}
    </button>
  );
}
