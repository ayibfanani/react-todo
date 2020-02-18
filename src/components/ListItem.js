import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  padding: 10px;
  width: 400px;
  margin: 0 auto 1px;
`

const Columns = styled.div`
  display: flex;
  margin-left: -.75rem;
  margin-right: -.75rem;
  margin-top: -.75rem;
`

const Column = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: .75rem;

  ${({ type }) => type === 'narrow' && `
    flex: none;
  `}
`

const Button = styled.button`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(.5em - 1px);
  text-align: center;
  white-space: nowrap;
  align-items: center;
  box-shadow: none;
  display: inline-flex;
  font-size: 10px;
  height: 2.5em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
`

class ListItem extends Component {
  render() {
    return (
      <Item>
        <Columns>
          <Column>{this.props.children}</Column>
          <Column type="narrow">
            <Button onClick={() => this.props.editTodo(this.props.k, this.props.todo)}>Ubah</Button>
          </Column>
          <Column type="narrow">
            <Button onClick={() => this.props.removeTodo(this.props.k)}>Hapus</Button>
          </Column>
        </Columns>
      </Item>
    )
  }
}

export default ListItem