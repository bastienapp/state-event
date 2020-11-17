import React, { useState } from 'react';
import './App.css';

function CounterHook() {
  const [counter, setCounter] = useState(13);

  const action = (type) => {
    if (type === 'increment') {
      setCounter(counter + 1);
    } else if (type === 'decrement') {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className='App'>
      <div>{counter}</div>
      <button onClick={() => action('decrement')}>-1</button>
      <button onClick={() => action('increment')}>+1</button>
      <button
        onClick={() => {
          action('reset');
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterHook;
