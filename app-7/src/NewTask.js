import React from 'react'

const NewTask = (props) => {
    const {handleSubmit, setState, state} = props.functionality

    return (
        <div>
            <form action="submit" onSubmit={(e) => handleSubmit(e)}>
              <input type="text" placeholder="Enter a new task" value={state} onChange={(e) => setState(e.target.value)}/>
              <button>Add</button>
            </form>
        </div>
    )
}

export default NewTask
