import React, { useState } from 'react';
import Pokemon from './Pokemon';
import axios from 'axios'
import './App.css';

function App() {
  const [ input, setInput ] = useState("")
  const [ state, setState ] = useState( { name: "", id: 0, type: "", sprite: ""} )

  const handleInput = (val) => {
    setInput(val)
  }

  const apiSearch = (e) => {
    e.preventDefault()
    
    if (input.length > 0) {
       axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`).then(res => {
        const { data } = res
        setState({ name: data.species.name, id: data.id, type: data.types.length > 1 ? [data.types[0].type.name, data.types[1].type.name] : data.types[0].type.name, sprite: data.sprites.front_default })
      })
    }
    
    setInput("")
  }

  return (
    <div className="App">

      <form action="submit" onSubmit={(e) => apiSearch(e)}>
        <input type="text" value={input} placeholder="Search for a Pokémon" onChange={(e) => handleInput(e.target.value)} />
        <button>Search</button>
      </form>
      <Pokemon state={state}/>

    </div>
  );
}

export default App;
