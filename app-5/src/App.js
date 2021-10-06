import React, { Component } from 'react'
import Image from './Image'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div>
        <Image src={'https://http.cat/100'}/>
      </div>
    )
  }
}

export default App
