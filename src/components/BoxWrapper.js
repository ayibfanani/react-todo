import React from 'react'
import styled from 'styled-components'

const BoxWrapper = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  padding: 10px;
  width: 400px;
  margin: 0 auto 10px;
`

function Wrapper(props) {
  return (
    <BoxWrapper>{props.children}</BoxWrapper>
  )
}

export default Wrapper