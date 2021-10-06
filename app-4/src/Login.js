import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [state, setState] = useState({ user: "", pass: "" })
    
    const sendAlert = () => {
        alert(
        `Username: ${state.user} Password: ${state.pass}`
        )
    }
    console.log(state)
    return (
        <div className="main">
            <input type="text" placeholder="Username" onChange={(e) => setState({...state, user: e.target.value})}/>
            <input type="text" placeholder="Password" onChange={(e) => setState({...state, pass: e.target.value})}/>
            <button onClick={sendAlert}>Login</button>
        </div>
    )
}

export default Login
