import React from 'react'

const Pokemon = (props) => {
    const { name, id, type, sprite } = props.state
    
    return (
        <div>
            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            <h2>{id > 0 ? id : null}</h2> 
            {Array.isArray(type) 
            ? type.map((el, index) => {
                return <h2 key={index}>{el.charAt(0).toUpperCase() + el.slice(1)}</h2>
            }) 
            : <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>}
            
            <img src={sprite} alt="" />
        </div>
    )
}

export default Pokemon

// Line 9: Return name with the first letter uppercase
// Line 10: if id > 0 return id in an h2, otherwise do nothing
// Line 11: if type is an array (contains more than 1 value), map over each element and return an h2 containing the element with the first letter capitalized
// Line 15: Otherwise just return the single type with char[0] capitalized