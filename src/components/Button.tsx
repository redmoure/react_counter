import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onHandleFunc: () => void;
};

export default function Button(props: ButtonProps) {
  return <button onClick={props.onHandleFunc}>{props.children}</button>;
}
