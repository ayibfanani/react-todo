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
      selected_todo: {
        title: '',
        status: 0
      },
      todos: [
        { title: 'Task #1', status: 0 },
        { title: 'Task #2', status: 0 },
        { title: 'Task #3', status: 0 }
      ]
    }
    this.storeTodo = this.storeTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.handleChangeTodo = this.handleChangeTodo.bind(this)
  }

  handleChangeTodo(todo) {
    this.setState({selected_todo: todo})
  }

  storeTodo(val) {
    this.setState({ todos: this.state.todos.concat(val) })
  }

  editTodo(key, todo) {
    todo['key'] = key
    this.setState({ selected_todo: todo })
  }

  updateTodo(key, todo) {
    let todos = this.state.todos.map((item, i) => {
        if (i == key) {
          return todo
        }
        
        return item
      });

    this.setState({ 
      todos, 
      selected_todo: {
        title: '',
        status: 0
      }
    })
  }

  removeTodo(index) {
    this.setState({ todos: this.state.todos.filter((item, i) => i !== index) })
  }

  render() {
    return (
      <div className="App">
        <Title><strong>todos</strong></Title>
        <BoxWrapper>
          <NewTodo todo={this.state.selected_todo} storeTodo={this.storeTodo} updateTodo={this.updateTodo} handleChangeTodo={this.handleChangeTodo}></NewTodo>
        </BoxWrapper>
        <ListWrapper items={this.state.todos} editTodo={this.editTodo} removeTodo={this.removeTodo} />
      </div>
    )
  }
}

export default App;
