import React from 'react'
import ListItem from './ListItem'
import BoxWrapper from './BoxWrapper'

function ListWrapper(props) {
  return (
    <div>
      { props.items.length > 0
        ? props.items.map((item, index) => (<ListItem removeTodo={props.removeTodo} editTodo={props.editTodo} k={index} key={index} todo={item}>{item.title}</ListItem>))
        : <BoxWrapper>Yeay, bisa ngopi.</BoxWrapper>
      }
    </div>
  )
}

export default ListWrapper