import React, {useEffect, useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Side effect code here
    console.log("Side effect executed");
  }, ["count"]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
};

export default App
