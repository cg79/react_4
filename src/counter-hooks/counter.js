import React, { useState, useEffect } from "react";

//https://reactjs.org/docs/hooks-state.html
//https://medium.com/soluto-engineering/react-class-features-vs-hooks-equivalents-745368dafdb3
export const Counter = function (props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  
  const increment = () => {
    const newCountValue = count +1;
    setCount(newCountValue);
    props.onCounterZeroClick(newCountValue);
  }

  useEffect(() => {

    console.log("I am mounting");
    return () => console.log("I am unmounting");
  }, []);

  useEffect(() => {
    console.log('Just updated...');
})

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => increment()}>Click me</button>
    </div>
  );
};
