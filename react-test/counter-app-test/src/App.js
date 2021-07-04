import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  return (
    <div data-test='component-app' className='App'>
      {error ? (
        <p style={{ color: 'red' }} data-test='error-element'>
          Counter can't go below zero
        </p>
      ) : null}
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <button
        data-test='increment-button'
        onClick={() => {
          if (error) {
            setError(false);
          }
          setCount(count + 1);
        }}
      >
        Increment counter
      </button>
      <button
        data-test='decrement-button'
        onClick={() => (count > 0 ? setCount(count - 1) : setError(true))}
      >
        Decrement counter
      </button>
    </div>
  );
}

export default App;
