import React, { useState } from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List';

function App() {
  const [state, setState] = useState("")
  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTasks([...tasks, state])
    setState("")
  }
 
  return (
    <div className="App">
      <h1>My to-do list:</h1>
        <NewTask functionality={{handleSubmit, setState, state}}/>
        <List list={tasks}/>
    </div>
  );
}

export default App;

// setTasks(tasks => {return [...tasks, state]}) This works as an alternative to line 13
