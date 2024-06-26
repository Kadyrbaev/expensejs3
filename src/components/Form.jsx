import React, { useState } from 'react'
import styled from 'styled-components'

const Form = (props) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [date, setDate] = useState("")

  const tileHandler=(e)=>{
    setTitle(e.target.value)
  }
  const priceHandler=(e)=>{
    setPrice(e.target.value)
  }
  const dateHandler=(e)=>{
    setDate(e.target.value)
  }

  
  const addHandler=()=>{
    const obj = {
      title: title,
      price: price,
      date: new Date(date),
      id: Math.random()
    }
    props.onGetData(obj)
  }

  return (
    <FormStyle>
      <input onChange={tileHandler} type="text" />
      <input onChange={priceHandler} type="text" />
      <input onChange={dateHandler} type="date" />
      <div>
        <button onClick={addHandler}>ADD</button>
        <button onClick={props.onCloseFormHandler}>CLOSE</button>
      </div>
    </FormStyle>
  )
}

export default Form


const FormStyle = styled.div`
  border: 2px solid;
  width: 300px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;

  input{
    width: 95%;
    padding: 6px;
    margin-top: 10px;
  }
`

