import React from 'react'
import styled from 'styled-components'

export const Test = (props) => {
  return (
    <Cont style={{background: props.color}}>
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <h2>{props.country}</h2>
        <h3>{props.age}</h3>

    </Cont>
  )
}


const Cont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
    width: 80%;
    margin: auto;
    margin-top: 14px;
    border-radius: 10px;

    img{
        width: 100px;
        height: 120px;
    }
`