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

    this.state = {
      todo: ''
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleKeyDown(e) {
    const val = e.target.value;

    if (e.key === 'Enter' && val.length > 0) {
      this.props.storeTodo(val)

      this.setState({ todo: '' })
    }
  }

  handleChange(e) {
    this.setState({todo: e.target.value})
  }

  render() {
    return (
      <div>
        <Input placeholder="Enter task..." value={this.state.todo} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
      </div>
    )
  }
}

export default Filter