import React, { Component } from 'react';
import './App.css';
import NewTodo from './components/NewTodo'
import styled from 'styled-components'
import BoxWrapper from './components/BoxWrapper'
import ListWrapper from './components/ListWrapper'

const Title = styled.p`
  text-align: center;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { title: 'Task #1', status: 0 },
        { title: 'Task #2', status: 0 },
        { title: 'Task #3', status: 0 }
      ]
    }
    this.storeTodo = this.storeTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  storeTodo(val) {
    this.setState({ todos: this.state.todos.concat(val) })
  }

  removeTodo(index) {
    this.setState({ todos: this.state.todos.filter((item, i) => i != index) })
  }

  render() {
    return (
      <div className="App">
        <Title><strong>todos</strong></Title>
        <BoxWrapper>
          <NewTodo storeTodo={this.storeTodo}></NewTodo>
        </BoxWrapper>
        <ListWrapper items={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    )
  }
}

export default App;
