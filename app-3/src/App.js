import React, { useState } from 'react';
import './App.css';

function App() {
  const items = ['spaghetti', 'ice cream', 'sushi', 'cheese', 'bologna', 'pasta']
  const [state, setState] = useState("")

  return (
    <div className="App">
      <input type="text" onChange={(e) => setState(e.target.value)}/>
      {items.filter(word => word.includes(state)).map((el, index) => {
        return <h1 key={index}>{el}</h1>  
      })}
    </div>
  );
}

export default App;
