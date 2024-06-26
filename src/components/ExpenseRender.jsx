import React from 'react'
import styled from 'styled-components'

export const ExpenseRender = (props) => {
    const day = props.date.getDate()
    const month = props.date.getMonth()+1
    const year = props.date.getFullYear()
  return (
    <Render>
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>
        <span>{day}/{month}/{year}</span>
    </Render>
  )
}


const Render = styled.div`
  margin: auto;
  border: 2px solid;
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  margin-top: 16px;
`
