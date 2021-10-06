import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [state, setState] = useState("")
  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTasks(tasks => {return [...tasks, state]}) 
    setState("")
  }
 
  return (
    <div className="App">
      <h1>My to-do list:</h1>

        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Enter a new task" value={state} onChange={(e) => setState(e.target.value)}/>
          <button>Add</button>
        </form>

      {tasks.map((el, index) => {
        return <Todo key={index} item={el}/>
      })}

    </div>
  );
}

export default App;
