import React, { useState } from 'react';
import { Message } from './Message';
import './App.css';

function App() {

  let [count, setCount] = useState(1);
  let [isDay, setDay] = useState(true);

  return (
    <div className={`App ${isDay ? 'dayLight' : 'nightLight'}`}>
      <Message counter={count} />

      <button onClick={() => setCount(++count)}>Update counter</button>

      <button onClick={()=>setDay(!isDay)}>Update Day</button>
    </div>
  );
}

export default App;
