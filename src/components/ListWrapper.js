import React from 'react'
import ListItem from './ListItem'
import BoxWrapper from './BoxWrapper'

function ListWrapper(props) {
  return (
    <div>
      { props.items.length > 0
        ? props.items.map((item, index) => (<ListItem removeTodo={props.removeTodo} k={index} key={index}>{item.title}</ListItem>))
        : <BoxWrapper>Tidak ada data</BoxWrapper>
      }
    </div>
  )
}

export default ListWrapper