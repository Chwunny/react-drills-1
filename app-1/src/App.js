import './App.css';

import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState("")
  console.log(state);
  return (
    <div>
      <input type="text" onChange={(e) => setState(e.target.value)}/>
      <p>{state}</p>
    </div>
  )
}

export default App
