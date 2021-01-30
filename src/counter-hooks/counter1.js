

import React, { useState, useEffect } from 'react';

//https://reactjs.org/docs/hooks-state.html
export const Counter1 = function(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.start);

  const increase = () => {
    debugger;
    const newCountValue = count + props.count;
    setCount(newCountValue);
  }

  useEffect(() => {
    console.log('count changed', props.count, props);
}, [props.count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => increase()}>
        Click me
      </button>
    </div>
  );
}


