import React from 'react'
import styled from 'styled-components'

export const ChartBar = (props) => {
    const maxSena = 20000
    const sena = props.rashod
    const prossent = sena*100/maxSena
  return (
    <div>
        <ChartBarStyle>
            <div style={{height: prossent+"%"}}></div>
        </ChartBarStyle>
        <span>{props.month}</span>
    </div>
  )
}


const ChartBarStyle = styled.div`
    border: 1px solid;
    width: 50px;
    height: 250px;
    border-radius: 40px;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    background-color: white;

    div{
        background-color: red;
        
    }
    
`