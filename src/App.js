import React, { useState } from 'react';
import './App.css';
import useCounter from './custom-hooks/useCounter';

function App() {

  // const [count, decrement, increment, reset, countMessage] = useCounter('Grade');
  const [count, decrement, increment, reset, countMessage] = useCounter('Marks');

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // }

  // const decrement = () => {
  //   setCount(count - 1);
  // }

  // const reset = () => {
  //   setCount(0);
  // }

  return (
    <div className="App">
      <h2>{countMessage}</h2>
      <div className='increment-decrement-container'>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
