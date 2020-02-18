import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-size: 15px;
  padding: 5px;
  width: 96%;
  border: none;
`

class Filter extends Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleKeyDown(e) {
    const val = e.target.value;

    if (e.key === 'Enter' && val.length > 0) {
      if (this.props.todo.key !== undefined && this.props.todo.key !== null) {
        this.props.updateTodo(this.props.todo.key, { title: val, status: this.props.todo.status })
      } else {
        this.props.storeTodo({ title: val, status: 0 })
      }
      
      let todo = this.props.todo
      todo['title'] = ''
      delete todo['key']
      this.props.handleChangeTodo(todo)
    }
  }

  handleChange(e) {
    let todo = this.props.todo
    todo['title'] = e.target.value
    this.props.handleChangeTodo(todo)
  }

  render() {
    return (
      <div>
        <Input placeholder="Enter a task..." value={this.props.todo.title} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
      </div>
    )
  }
}

export default Filter