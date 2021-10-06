import React from 'react'
import Todo from './Todo'

const List = (props) => {
    const { list } = props
    
    return (
        <div>
            {list.map((el, index) => {
                return <Todo key={index} item={el}/>
            })}
        </div>
    )
}

export default List
