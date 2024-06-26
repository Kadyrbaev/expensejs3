import React from 'react'
import { ChartBar } from './ChartBar'
import styled from 'styled-components'

export const Chart = (props) => {
    const months = [
        {
            month: "january",
            rashod: 0,
        },
        {
            month: "feburary",
            rashod: 0,
        },
        {
            month: "march",
            rashod: 0,
        },
        {
            month: "april",
            rashod: 0,
        },
        {
            month: "may",
            rashod: 0,
        },
        {
            month: "june",
            rashod: 0,
        },
        {
            month: "july",
            rashod: 0,
        },
        {
            month: "august",
            rashod: 0,
        },
        {
            month: "september",
            rashod: 0,
        },
        {
            month: "october",
            rashod: 0,
        },
        {
            month: "novomber",
            rashod: 0,
        },
        {
            month: "december",
            rashod: 0,
        },
    ]

    props.products.map((el)=>{
        const ind = el.date.getMonth()
        console.log(ind);
        months[ind].rashod = +el.price +  months[ind].rashod
    })


  return (
    <ChartStyle>
       {
        months.map((el)=>{
            return <ChartBar month={el.month} rashod={el.rashod} />
        })
       }
    </ChartStyle>
  )
}


const ChartStyle = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid;
    width: 900px;
    padding: 10px 20px;
    background-color: #333030;
    margin: auto;
    margin-top: 30px;
    border-radius: 20px;

    span{
        color: white;
    }
`