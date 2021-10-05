import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  state = ["Spaghetti", "Ravioli", "Breadsticks", "Chicken Parm", "Alfredo", "Lasagna"]

  render() {
    return (
      <div>
        {this.state.map((e, index) => {
          return <h1 key="index">{e}</h1>
        })}
      </div>
    )
  }
}

export default App

